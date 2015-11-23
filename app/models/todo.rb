class Todo < ActiveRecord::Base
  validates :title, :author_id, presence: true
  validates :done, inclusion: [true, false], default: false
  after_initialize { self.done = false if self.done.nil? }

  has_many :steps
  # has_many :assignees
  belongs_to :author, foreign_key: :author_id, class_name: "User"

end
