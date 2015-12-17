var TodoShow = React.createClass({
  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._getTodo);
    ProjectStore.addProjectChangeListener(this._getTodo);
    $( "#todo-show-step-list" + this.props.params.todoID ).sortable({
      revert: true,
      handle: ".step-drag-handle",
      axis: "y"
    });
    $( "ul, li" ).disableSelection();
  },

  componentWillUnMount: function () {
    ProjectStore.removeStepsChangeListener(this._getTodo);
    ProjectStore.removeProjectChangeListener(this._getTodo);
  },

  getInitialState: function () {
    var todos = ProjectStore.currentProject().todos || {};
    var todo = todos[this.props.params.todoID] || {};
    return {
      todo: todo,
      steps: todo.steps || {}
    };
  },

  _getTodo: function () {
    if (this.isMounted()) {
      var todos = ProjectStore.currentProject().todos || {};
      var todo = todos[this.props.params.todoID] || {};
      this.setState({
        todo: todo,
        steps: todo.steps || {}
      });
    }
  },

  _deleteTodo: function () {
    var todoParams = {id: this.props.params.todoID, projectID: this.props.params.projectID};
    TodoUtil.destroyTodo(todoParams);
  },

  render: function () {
    var that = this;
    // var todos = ProjectStore.currentProject().todos || {};
    var todo = this.state.todo;
    var steps = this.state.steps;
    var commentableParams = {
      commentable_type: "Todo",
      commentable_id: this.props.params.todoID
    };
    var navlinkTitles = ["Goals"];
    var navlinkPaths = [
      this.props.params.userID + "/projects/" + this.props.params.projectID + "/todos"
    ];

    return (
      <div className="panel">
        <article className="todo-show recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <section className="todo-list panel-content">
            <TodoHeader todo={todo} progress={todo.progress}/>
            <p>{todo.body}</p>

            <div className="delete-todo-button"
              onClick={this._deleteTodo}
              title="delete goal">
            </div>
            <StepForm params={this.props.params} todo={todo}/>
            <ul className="step-list group"
              id={"todo-show-step-list" + this.props.params.todoID}>
              {
                Object.keys(steps).map(function(stepID) {
                  var step = steps[stepID];
                  return(
                    <StepsListItem key={todo.id + "." + step.id}
                      step={step}
                      params={that.props.params}/>
                  );
                })
              }
            </ul>
          </section>
        </article>
        <CommentList commentableParams={commentableParams} projectID={this.props.params.projectID}/>
      </div>
    );
  }
});
