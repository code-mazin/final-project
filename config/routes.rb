Rails.application.routes.draw do
  resources :enrolls
  resources :courses
  resources :seeks
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  # resources :jobs, only: [:index, :create, :update, :destroy]
  get '/jobs', to: 'jobs#index'
  # get '/jobs/:id', to: 'jobs#show'
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"

  post "/seeks", to:"seeks#create"
  
  get "courses", to: "courses#index"
  post "enrolls", to:"enrolls#create"
end
