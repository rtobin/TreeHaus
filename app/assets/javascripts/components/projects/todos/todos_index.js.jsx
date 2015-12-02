var TodosIndex = React.createClass({
  getInitialState: function(){
    return {
      todos: this.props.todos || {}
    };
  },

  render: function () {
    var that = this;
    var Link = ReactRouter.Link;
    return (
      <div className="panel">
        <article className="todoindex recordable">
          <TodosIndexHeader project={this.props.project}/>
          <TodoForm />
          <section className="todo-list panel-content">
            {
              Object.keys(this.state.todos).map(function(todoID) {
                var todo = that.state.todos[todoID];
                return(
                  <Link to={that.props.location.pathname + "/" + todo.id}
                        todo={todo}>
                    <TodoIndexItem key={todo.id} todo={todo} location={that.props.location}/>
                  </Link>
                );
              })
            }
          </section>
        </article>
    </div>
    );
  }
});
