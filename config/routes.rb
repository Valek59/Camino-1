Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  root to: "clients#developpement"
  resources :clients, only: [:new, :create]
  get '/developpement', to: 'clients#developpement', as: "developpement"
  get '/mentions-legales', to: 'clients#mentions_legales', as: "mentions_legales"

  resources :articles, only: [:index, :show]
end
