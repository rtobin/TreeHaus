class Api::UsersController < ApplicationController

  def create
    # sign up the user
    @user = User.new(user_params)
    @user.email = @user.email.downcase
    if @user.save
      # redirect them to the new user's show page
      log_in!(@user)
      render "api/users/show_meta"
    else
      # input didn't pass validation;
      # prints password requirements
      # re-render sign up form.
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    user_params[:avatar] = @user.avatar if user_params[:avatar] == "null"

    if @user.update(user_params)
      @user.records.create(
        name: "profile updated",
        user_id: @user.id
      )
      render "api/users/show_meta"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show_meta"
  end

  protected
  def user_params
    self.params.require(:user).permit(
      :name,
      :title,
      :email,
      :password,
      :avatar)
  end
end
