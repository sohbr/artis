class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :currentuser, :logged_in?

  def currentuser
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
