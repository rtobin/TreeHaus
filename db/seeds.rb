# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Project.delete_all

jane = User.new(
  email: "jane@example.com"
)
jane.password = "Password0"
jane.save


jim = User.new(
  email: "jim@example.com"
)
jim.password = "Password0"
jim.save


ryan = User.new(
  email: "ryan@treehaus.com"
)
ryan.password = "Password1"
ryan.save!

Project.create!(
  title: "Project 1",
  description: "Let's do this!",
  archived: true,
  author_id: ryan.id
)

Project.create!(
  title: "Project 2",
  description: "Let's do this again!",
  archived: true,
  author_id: ryan.id
)
