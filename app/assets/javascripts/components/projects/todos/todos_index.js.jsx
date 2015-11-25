var TodoIndex = React.createClass({
  getInitialState: function(){
    return {todos: TodoStore.all()};
  },

  // _todosChanged: function(){
  //   this.setState({todos: TodoStore.all()});
  // },
  //
  // componentDidMount: function() {
  //   TodoStore.addChangedHandler(this._todosChanged);
  //   TodoStore.fetch();
  // },

  render: function() {
    var todos = this.state.todos;
    debugger
    return (
      <div className="Todoindex">
        <TodosIndexHeader/>
        <ul className="todo-index">
          {
            todos.map(function(todo) {
              return(
                <li><TodoIndexItem key={todo.id} todo={todo} /></li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});
