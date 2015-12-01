class StepAssignment < ActiveRecord::Base
  validates :assignee, :assigner, :step_id, presence: true

  belongs_to :assignee, class_name: "User"
  belongs_to :assigner, class_name: "User"

  belongs_to :step, dependent: :destroy

  has_many :records, as: :recordable
  
end
