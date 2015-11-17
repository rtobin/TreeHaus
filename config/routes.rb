Rails.application.routes.draw do
  # resource :session, only: [:create, :destroy, :new]
  # resources :users, only: [:create, :new, :show, :update, :edit]
  # namespace :api, defaults: {format: :json} do
  #   resources :projects, only: [:show] do
  #     resources :todos, only: [:create, :new, :show, :update, :edit]
  #   end
  #   resources :projects, only: [:index, :create]
  # end


  root "static_pages#root"
end
