Rails.application.routes.draw do
  root   'ideas#index'
  # post   '/ideas',          to: 'ideas#create'
  # delete '/ideas/:id',      to: 'ideas#destroy'
  # get    '/ideas/:id/edit', to: 'ideas#edit', as: 'edit_idea'
  # post   '/ideas/:id',      to: 'ideas#update'

  resources :ideas, except: [:new, :index, :show]
end
