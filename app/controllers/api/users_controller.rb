class Api::UsersController < ApplicationController

  def create
    # sign up the user
    @user = User.new(user_params)
    @user.email = @user.email.downcase
    if @user.save
      # redirect them to the new user's show page
      log_in!(@user)
      render "api/users/show"
    else
      # input didn't pass validation;
      # prints password requirements
      # re-render sign up form.
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  protected
  def user_params
    self.params.require(:user).permit(:email, :password)
  end
end
