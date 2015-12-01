class Notification < ActiveRecord::Base
  validates(
    :user_id,
    :record_id
  )

  belongs_to :user
  belongs_to :record
end
