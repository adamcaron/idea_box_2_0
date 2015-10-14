Rails.application.routes.draw do
  root 'ideas#index'
  post 'idea/create', to: 'ideas#create'
end
