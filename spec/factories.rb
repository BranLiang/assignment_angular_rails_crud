FactoryGirl.define do
  factory :user do
    sequence(:name){ |n| "Jon#{n}" }
    sequence(:email){ |n|"jon#{n}@email.com"}
    password "12345678"
    password_confirmation "12345678"
  end

  factory :pin do
    sequence(:item_name) { |n| "item#{n}"}
    buy_sell    true
    description "Bla Bla Bla Bla"
    user
  end

end
