var TodosIndex = React.createClass({
  getInitialState: function(){
    return {
      todos: ProjectStore.currentProject().todos || {}
    };
  },

  componentDidMount: function () {
    ProjectStore.addTodosChangeListener(this._updateTodos);
    ProjectStore.addProjectChangeListener(this._updateTodos);
    $( "#todoindex-list" ).sortable({
      revert: true,
      handle: ".todo-drag-handle",
      axis: "y"
    });
    $( "ul, li" ).disableSelection();
  },

  componentWillUnMount: function () {
    ProjectStore.removeTodosChangeListener(this._updateTodos);
    ProjectStore.removeProjectChangeListener(this._updateTodos);

  },

  _updateTodos: function () {
    this.setState({
      todos: ProjectStore.currentProject().todos || {}
    })
  },

  render: function () {
    var that = this;
    var Link = ReactRouter.Link;
    var todos = ProjectStore.currentProject().todos || {};
    return (
      <div className="show-panel">
        <article className="todoindex recordable" >
          <TodosIndexHeader todos={todos} />
          <TodoForm params={this.props.params}/>
          <section className="todo-list panel-content">
            <ul id="todoindex-list" className="todoindex-list">
              {
                Object.keys(todos).map(function(todoID) {
                  var todo = todos[todoID];
                  if (parseInt(todoID) >= 0) {
                    return(
                      <TodoIndexItem key={todoID} todo={todo}
                        params={that.props.params}/>
                    );
                  }
                })
              }
            </ul>
          </section>
        </article>
    </div>
    );
  }
});
