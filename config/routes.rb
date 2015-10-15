Rails.application.routes.draw do
  root      'ideas#index'

  resources :ideas, except: [:new, :index, :show]

  put       'ideas/:id/quality-up',   to: 'ideas#quality_up'
  put       'ideas/:id/quality-down', to: 'ideas#quality_down'
end
