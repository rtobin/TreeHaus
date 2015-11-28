var TodosIndex = React.createClass({
  getInitialState: function(){
    // var parsedString = this.props.location.pathname.split("/");
    // var projectId = parseInt(parsedString[3]);
    return {todos: ProjectStore.currentProject().todos};
  },
  // _todosChanged: function(){
  //   this.setState({todos: TodoStore.all()});
  // },
  //
  // componentDidMount: function() {
  //   TodoStore.addChangedHandler(this._todosChanged);
  //   TodoStore.fetch();
  // },

  todoItems: function () {
    debugger
    var that = this;
    if (this.state.todos) {
      return (
        Object.keys(this.state.todos).map(function(todoID) {
          var todo = that.state.todos[todoID];
          return(
            <li><TodoIndexItem key={todoID} todo={todo} /></li>
          );
        })
      );
    }
  },

  render: function () {
    debugger
    return (
      <div className="todoindex">
        <TodosIndexHeader/>
        <ul className="todo-list">
          {
            this.todoItems()
          }
        </ul>
      </div>
    );
  }
});
