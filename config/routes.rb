Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :new, :show]
    resources :users, only: [:create, :update, :destroy]
    resources :projects, only: [:show] do
      resources :todos, only: [:create, :new, :show, :update, :edit]
    end
    resources :projects, only: [:index, :create]
  end


  root "static_pages#root"
end
