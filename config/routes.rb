Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :clients, only: [:create]
  get 'clients/developpement', as: "developpement"
  get 'clients/accompagnement', as: "accompagnement"
  get 'clients/pilotage', as: "pilotage"
end
