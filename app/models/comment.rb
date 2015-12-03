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
  belongs_to :author, foreign_key: :author_id, class_name: "User"

  def self.comments_for_commentable(params)
    Comment.where(
      commentable_id: params[:commentable_id],
      commentable_type: params[:commentable_type]
    ).order(:created_at)
  end

end
