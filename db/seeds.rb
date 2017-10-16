# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

default_users = [
  "nixon", "jimmy", "brian", "betty", "rebekah", "tommy", "jerry", "david", "adrian",
  "chris", "katrina", "carmen", "andres"
]

default_users.each do |username|
  pw = "#{username}123"
  email = "#{username}@demo.com"
  User.create(username: username, password: pw, email: email)
end

user_ids = (User.first.id..User.last.id).to_a

categories = [
  "Cosmetology", "Culinary", "Art/Design", "Automotive", "Massage Therapy", "Animal Care",
  "Fitness/Nutrition", "Travel/Tourism", "Film/Photography"
]

50.times do
  category = categories.sample
  default_text = "Looking for a professional in #{category}? Look no further, I'm offering my service for #{category} for the low price of $15/hr. If you're interested, shoot me a message!"
  Post.create(user_id: user_ids.sample, title: "#{category} Job Title", body: default_text, category: category)
end

post_ids = (Post.first.id..Post.last.id).to_a

10.times do |i|
  Bookmark.create(user_id: user_ids[i], post_id: post_ids.first)
end
