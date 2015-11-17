class ProjectMembership < ActiveRecord::Base

  validates(
    :project_id,
    :member_id,
    presence: true
  )

  belongs_to :project

  belongs_to(
    :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: "User"
  )
end
