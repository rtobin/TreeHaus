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

  def self.comments_for_commentable(params)
    Comments.where(
      commentable_id: params[:commentable_id],
      commentable_type: params[:commentable_type]
    )
  end

end
