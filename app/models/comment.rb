class Comment < ActiveRecord::Base
  validates(
    :content,
    :author_id,
    :commentable_id,
    :commentable_type,
    presence: true
  )

  belongs_to :commentable, polymorphic: true

  has_many :records, as: :recordable
end
