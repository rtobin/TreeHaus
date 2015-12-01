class Todo < ActiveRecord::Base
  validates :title, :author_id, presence: true
  validates :done, inclusion: [true, false], default: false
  after_initialize { self.done = false if self.done.nil? }

  has_many :steps
  has_many :step_assignments, through: :steps, source: :step_assignments
  # has_many :assignees
  belongs_to :author, foreign_key: :author_id, class_name: "User"
  belongs_to :project, dependent: :destroy

  has_many :records, as: :recordable
  has_many :comments, as: :commentable


  def all_assignees
    User.includes (:assigned_steps)
        .where(assigned_steps: { todo_id: this.id })
        .distinct
  end

  def is_done?
    self.steps.all? { |step| step.done }
  end

  def set_done
    self.steps.each do |step|
      step.set_done
    end
  end
end
