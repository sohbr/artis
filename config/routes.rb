Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:index, :create, :show]
    resource :session, only:[:create, :destroy]
    resources :posts, only:[:create, :index, :show, :update, :destroy]
    resources :conversations, only: [:index, :show, :create]
    resources :personal_messages, only: [:create]
  end

  mount ActionCable.server => '/cable'
end
