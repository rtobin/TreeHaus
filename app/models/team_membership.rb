class TeamMembership < ActiveRecord::Base

  validates :team_id, :member_id, presence: true

  belongs_to :team

  belongs_to :member,
    class_name: "User"
  
end
