Rails.application.routes.draw do
  get 'pages/home'

  resources :posts
  root 'pages#home'

end
