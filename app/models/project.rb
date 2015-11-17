class Project < ActiveRecord::Base

  validates(
    :title,
    :description,
    :author_id,
    :archived,
    presence: true
  )

  has_one :team
  has_many :members, through: :team, source: :members
  belongs_to :author, class_name: "User"

end
