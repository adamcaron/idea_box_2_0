Rails.application.routes.draw do
  root   'ideas#index'
  post   '/ideas',     to: 'ideas#create'
  delete '/ideas/:id', to: 'ideas#destroy'
end
