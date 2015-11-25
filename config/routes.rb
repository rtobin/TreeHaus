Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :destroy]
    resources :projects, only: [:index, :show, :create, :new, :update]
    resources :todos, only: [:show, :create, :update]
    resources :steps, only: [:show, :create, :update]

  end


  root "static_pages#root"
end
