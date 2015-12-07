class Notification < ActiveRecord::Base
  validates(
    :user_id,
    :record_id,
    presence: true
  )

  belongs_to :user
  belongs_to :record
end
