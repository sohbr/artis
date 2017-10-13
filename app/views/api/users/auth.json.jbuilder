json.partial! '/api/users/user', user: @user
json.token @user.session_token
