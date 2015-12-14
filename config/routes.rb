Rails.application.routes.draw do
  get 'pages/home'

  resources :posts
  resources :customers
  root 'pages#home'

end
