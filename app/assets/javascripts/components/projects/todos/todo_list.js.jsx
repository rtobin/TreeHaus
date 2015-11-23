var TodoList = React.createClass({
  getInitialState: function(){
    return {todos: TodoStore.all()};
  },

  _todosChanged: function(){
    this.setState({todos: TodoStore.all()});
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this._todosChanged);
    TodoStore.fetch();
  },

  render: function() {
    var todos = this.state.todos;
    return (
      <div className="Todolist">
        <div className="todo-list">
          {
            todos.map(function(todo) {
              return(
                <TodoListItem key={todo.id} todo={todo} />
              );
            })
          }
        </div>
        <TodoForm />
      </div>
    );
  }
});
