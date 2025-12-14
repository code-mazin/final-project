Rails.application.routes.draw do
  resources :jobs, only: [:index, :create, :show]
  resources :ideas, only: [:index, :create]
  resources :courses, only: [:index]
  resources :seeks, only: [:create]
  resources :job_applications, only:[:create]
  # resources :enrolls
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  # resources :jobs, only: [:index, :create, :update, :destroy]
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch "/me", to: "users#update"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/enrolls", to:"enrolls#create"
  # delete "/enrolls", to:"enrolls#destroy"
end






