class Api::SessionsController < ApplicationController
  before_action :not_logged_in?, only: [:create, :new]
  before_action :logged_in?, only: [:destroy]

  def create
    # signs a user in
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render json: "No user with given email/password", status: 422
    else
      # sign the user in
      log_in!(user)
      render json: user
    end
  end

  def destroy
    # sign a user out
    log_out!
    render json: {}
  end

end
