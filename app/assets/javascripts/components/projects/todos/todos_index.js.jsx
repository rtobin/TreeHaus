var TodosIndex = React.createClass({
  getInitialState: function(){
    return {
      todos: this.props.todos || {}
    };
  },

  componentDidMount: function () {
    ProjectStore.addTodosChangeListener(this._updateTodos);
  },

  componentWillUnMount: function () {
    ProjectStore.removeTodosChangeListener(this._updateTodos);
  },

  _updateTodos: function () {
    this.setState({
      todos: ProjectStore.currentProject().todos
    })
  },

  render: function () {
    var that = this;
    var Link = ReactRouter.Link;
    return (
      <div className="panel">
        <article className="todoindex recordable">
          <TodosIndexHeader project={this.props.project} location={this.props.location}/>
          <TodoForm params={this.props.params}/>
          <section className="todo-list panel-content">
            {
              Object.keys(this.state.todos).map(function(todoID) {
                var todo = that.state.todos[todoID];
                return(
                  <TodoIndexItem key={todoID} todo={todo}
                    params={that.props.params}/>
                );
              })
            }
          </section>
        </article>
    </div>
    );
  }
});
