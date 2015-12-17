class Project < ActiveRecord::Base

  validates(
    :title,
    :description,
    :author_id,
    presence: true
  )
  validates_uniqueness_of :title, scope: :author_id
  validates :archived, inclusion: [true, false], default: false

  has_many :memberships, dependent: :destroy
  has_many :members, through: :memberships
  belongs_to :author, foreign_key: :author_id, class_name: "User"
  has_many :todos, dependent: :destroy

  has_many :records, as: :recordable

  def todos_progress
    todos = self.todos
    total_step_count = 0
    total_done_count = 0
    todos.each do |todo|
      progress = todo.progress
      total_step_count += progress[:step_count]
      total_done_count += progress[:done_count]
    end

    {total_done_count: total_done_count, total_step_count: total_step_count}
  end
end
