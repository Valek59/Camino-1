Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :clients, only: [:new, :create]
  get '/developpement', to: 'clients#developpement', as: "developpement"
  get '/accompagnement', as: "accompagnement"
  get '/pilotage', as: "pilotage"
end
