class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable
  include DeviseTokenAuth::Concerns::User

  has_many :pins
end
