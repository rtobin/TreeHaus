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

# Ryan todos
(1...5).each do |i|
  Todo.create!(
    title: "Todo #{i}",
    body: "Let's do this #{i} times!",
    author_id: ryan.id,
    project_id: ryan.projects.first.id
  )
  (1...5).each do |j|
    Step.create!(
      title: "Step #{j}",
      body: "Step through this #{i} times!",
      author_id: ryan.id,
      todo_id: i
    )
  end
end
