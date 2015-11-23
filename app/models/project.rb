class Project < ActiveRecord::Base

  validates(
    :title,
    :description,
    :author_id,
    presence: true
  )

  validates :archived, inclusion: [true, false], default: false

  has_one :team
  has_many :members, through: :team, source: :members
  belongs_to :author, foreign_key: :author_id, class_name: "User"
  has_many :todos

end
