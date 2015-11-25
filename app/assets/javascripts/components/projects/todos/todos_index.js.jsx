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

  render: function() {
    var that = this;
    return (
      <div className="todoindex">
        <TodosIndexHeader/>
        <ul className="todo-list">
          {
            Object.keys(this.state.todos).map(function(todoID) {
              var todo = that.state.todos[todoID];
              return(
                <li>{todoID + ": "}<TodoIndexItem key={todoID} todoid={todoID} todo={todo} /></li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});
