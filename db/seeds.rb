# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

<<<<<<< HEAD
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
=======
User.create(username: "Doomi", password: "123456", email: "doomiproud@gmail.com")
>>>>>>> fef46a861ccdc963d7a677815bcf4b3586e7270e
