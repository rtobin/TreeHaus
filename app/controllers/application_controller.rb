class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :current_user_id, :logged_in?

  def current_user
    return nil if self.session[:session_token].nil?
    User.find_by(session_token: self.session[:session_token])
  end

  def log_in!(user)
    user.reset_session_token!
    self.session[:session_token] = user.session_token
  end

  def log_out!
    self.session[:session_token] = nil
  end

  def require_logged_in!
    redirect_to new_session_url if current_user.nil?
  end

  def require_not_logged_in!
    redirect_to feed_url unless current_user.nil?
  end
end
