class Api::SessionsController < ApplicationController
  before_action :not_logged_in?, only: [:create, :new]
  before_action :logged_in?, only: [:destroy]

  def show
    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render "api/users/show"
  end

  def create
    # signs a user in
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user.nil?
      errors = []
      if email == "" || password == ""
        errors.push("Fields must not be blank.")
      else
        errors.push("No user with given email/password.")
      end

      render json: errors, status: 422

    else
      # sign the user in
      log_in!(@user)
      render "api/users/show"
    end
  end

  def destroy
    # sign a user out
    log_out!
    render json: {}
  end

end
