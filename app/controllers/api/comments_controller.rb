class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    klass_str = comment_params[:commentable_type]
    klass = klass_type.constantize
    commentable = klass.find(comment_params[:commentable_id])
    author = User.find(comment_params[:author_id])

    case klass_str
    when "Todo", "Step"
      if commentable.title.length > 6
        commentable_name = commentable.title[0..7] + "..."
      else
        commentable_name = commentable.title
      end
    # when ""
    #   stuff
    end

    if comment.save
      comment.records.create(
        name: "#{author.name} commented on a #{klass.downcase} (#{commentable_name})",
        user_id: comment.author_id
      )
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.try(:destroy!)
      comment.records.create(
        name: "comment destroyed: #{comment.title}",
        user_id: comment.author_id
      )
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid comment', status: 404 }
    end
  end

  def update
    comment = Comment.find(params[:id])
    if !comment
      render json: { message: 'not found', status: 404 }
    elsif comment.update(comment_params)
      comment.records.create(
        name: "comment updated: #{comment.title}",
        user_id: comment.author_id
      )
      render json: comment
    else
      render json: comment.errors.full_messages
    end
  end

  private
  def comment_params
    params.require(:comment).permit(
      :content,
      :author_id,
      :commentable_id,
      :commentable_type
    )
  end
end
