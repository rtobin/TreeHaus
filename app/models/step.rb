class Step < ActiveRecord::Base
  validates :title, :todo_id, :author_id, presence: true
  validates :done, inclusion: [true, false], default: false
  after_initialize { self.done = false if self.done.nil? }

  belongs_to :todo
  has_many :step_assignments
  has_many :assignees, through: :step_assignments, source: :assignee
  has_one :assigner, through: :step_assignments, source: :assigner

  def set_done
    self.update(done: true) 
  end
end
