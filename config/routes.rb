Rails.application.routes.draw do
  resources :users, except: [:create]
  # resources :carts
  resources :products
  resources :farms
  resources :farmers
  resources :purchases, only: [:index, :create]


  #filtered products
  get '/fruits', to: 'products#fruits'
  get '/vegetables', to: 'products#vegetables'

  #getting currentUser in/out of session
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  #create new user
  post '/signup', to: 'users#create'

  #reminder if user is signed in (persistence for refresh)
  get '/authorized', to: 'users#show'
  
  #return data for logged in user
  get '/user', to: 'users#find_logged_in_user'
end
