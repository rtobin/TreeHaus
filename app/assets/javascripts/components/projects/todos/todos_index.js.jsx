var TodosIndex = React.createClass({
  getInitialState: function(){
    return {
      todos: ProjectStore.currentProject().todos || {}
    };
  },

  render: function () {
    var that = this;
    return (
      <div className="todoindex">
        <TodosIndexHeader/>
        <div className="todo-list">
          {
            Object.keys(this.state.todos).map(function(todoID) {
              var todo = that.state.todos[todoID];
              return(
                <TodoIndexItem key={todo.id} todo={todo} />
              );
            })
          }
        </div>
      </div>
    );
  }
});
