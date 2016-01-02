Rails.application.routes.draw do
  # devise_for :users
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :destroy]
    resources :projects, only: [:index, :show, :create, :new, :update, :destroy]
    resources :todos, only: [:show, :create, :update, :destroy]
    resources :steps, only: [:show, :create, :update, :destroy]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    resources :memberships, only: [:index, :create, :destroy]
    resources :records, only: [:index]
  end

  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
  root "static_pages#root"
end
