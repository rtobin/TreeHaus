class Membership < ActiveRecord::Base
  validates :project_id, :member_id, presence: true
  validates_uniqueness_of :project_id, scope: :member_id

  belongs_to :project, dependent: :destroy
  belongs_to :member, foreign_key: :member_id, class_name: "User"
  has_many :records, as: :recordable

end
