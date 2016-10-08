require 'rails_helper'

FactoryGirl.define do
  factory :user do
    name  "Jon"
    email "jon@email.com"
    password "12345678"
    password_confirmation "12345678"
  end

  factory :pin do
    sequence(item_name) { |n| "Macbook air#{n}"}
    buy_sell    true
    description "Bla Bla Bla Bla"
    user
  end

end
