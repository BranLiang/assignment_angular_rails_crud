# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Destroy all models"
User.destroy_all
Pin.destroy_all
puts "All models destroyed"

puts "Seeding the users..."
3.times do |i|
  new_user = User.new
  new_user.name = Faker::Name.name
  new_user.email = "#{i}" + '@email.com'
  new_user.password = '12345678'
  new_user.password_confirmation = '12345678'
  new_user.save!
end
puts "Users seeded"

puts "Seeding the pins..."
10.times do |i|
  new_pin = Pin.new
  new_pin.item_name = Faker::Commerce.product_name
  new_pin.buy_sell = true
  new_pin.description = Faker::Lorem.sentence
  new_pin.user = User.all.sample
  new_pin.save!
end
puts "Pins all seeded."

puts "Done!"
