Rails.application.routes.draw do
  root 'static_pages#index'

  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do
    scope :v1 do
      resources :pins
    end
  end
end
