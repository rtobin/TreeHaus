class Step < ActiveRecord::Base
  validates :title, :todo_id, :author_id, presence: true
  validates :done, inclusion: [true, false], default: false
  after_initialize { self.done = false if self.done.nil? }

  belongs_to :todo, dependent: :destroy
  belongs_to :author, class_name: "User"
  has_many :step_assignments
  has_many :assignees, through: :step_assignments, source: :assignee
  has_one :assigner, through: :step_assignments, source: :assigner

  has_many :records, as: :recordable
  has_many :comments, as: :commentable

  def set_done
    self.update(done: true)
  end
end
