class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.comments_for_commentable(params)
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    comment_hash = commentable_stuff

    if @comment.save
      @comment.records.create(
        name: "#{comment_hash[:who]} commented on a #{comment_hash[:on_what]}",
        user_id: @comment.author_id
      )
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment_hash = commentable_stuff

    if comment.try(:destroy!)
      comment.records.create(
        name: "#{comment_hash[:who]} deleted a comment on a #{comment_hash[:on_what]}",
        user_id: comment.author_id
      )
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid comment', status: 404 }
    end
  end

  def update
    @comment = Comment.find(params[:id])
    comment_hash = commentable_stuff

    if !@comment
      render json: { message: 'not found', status: 404 }
    elsif @comment.update(comment_params)
      @comment.records.create(
        name: "#{comment_hash[:who]} changed a commented on a #{comment_hash[:on_what]}",
        user_id: @comment.author_id
      )
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages
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

  def commentable_stuff
    klass_str = comment_params[:commentable_type]
    klass = klass_str.constantize
    commentable = klass.find(comment_params[:commentable_id])
    author = User.find(comment_params[:author_id])
    author_name = author.name || author.email
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

    comment_hash = {}
    comment_hash[:on_what] = "#{klass_str.downcase} (#{commentable_name})"
    comment_hash[:who] = author_name
    comment_hash

  end
end
