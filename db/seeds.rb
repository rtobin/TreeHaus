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


guest = User.new(
  email: "guest@treehaus.com"
)
guest.password = "Password1"
guest.save!


project1 = Project.create!(
  title: "Project 1",
  description: "Let's do this!",
  archived: true,
  author_id: guest.id
)

Project.create!(
  title: "Project 2",
  description: "Let's do this again!",
  archived: true,
  author_id: guest.id
)

project1.members << guest
project1.members << jane
project1.members << jim

# Ryan todos
(1...5).each do |i|
  todo = Todo.create!(
    title: "Todo #{i}",
    body: "Let's do this #{i} times!",
    author_id: guest.id,
    project_id: guest.projects.first.id
  )

  todo.comments.create!(
    content: "First comment on this goal!!!",
    author_id: guest.id
  )
  (1...5).each do |j|
    step = Step.create!(
      title: "Step #{j}",
      body: "Step through this #{i} times!",
      author_id: guest.id,
      todo_id: i
    )
    step.comments.create!(
      content: "First comment on this task!!!",
      author_id: guest.id
    )
  end
end
