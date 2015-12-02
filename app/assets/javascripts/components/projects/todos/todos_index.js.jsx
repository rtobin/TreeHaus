var TodosIndex = React.createClass({
  getInitialState: function(){
    return {
      todos: ProjectStore.currentProject().todos || {}
    };
  },

  render: function () {
    var that = this;
    return (
      <div className="panel">
        <article className="todoindex recordable">
          <TodosIndexHeader />
          <TodoForm />
          <section className="todo-list panel-content">
            {
              Object.keys(this.state.todos).map(function(todoID) {
                var todo = that.state.todos[todoID];
                return(
                  <TodoIndexItem key={todo.id} todo={todo} />
                );
              })
            }
          </section>
        </article>
    </div>
    );
  }
});
