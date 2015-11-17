class Project < ActiveRecord::Base

  validates(
    :title,
    :description,
    :author_id,
    :archived,
    presence: true
  )

  has_one :team
  

end
