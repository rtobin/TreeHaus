var TodoShow = React.createClass({
  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._getTodo);
    ProjectStore.addTodosChangeListener(this._getTodo);
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
    ProjectStore.removeTodosChangeListener(this._getTodo);
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

  _activateDeleteModal: function (e) {
    e.preventDefault();
    var todoParams = {
      id: this.props.params.todoID,
      project_id: this.props.params.projectID
    };
    var userID = this.props.params.userID;
    var projectID = this.props.params.projectID;
    var question = 'are you sure you want to delete the goal: \"';
    question += this.state.todo.title + '\"?';
    var redirectURL = userID + '/projects/' + projectID + '/todos/';

    ModalActions.activateModal(
      question,
      function () {
        TodoUtil.destroyTodo(todoParams)
      },
      redirectURL
    );
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
      <div className="show-panel">
        <article className="todo-show recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <section className="todo-list panel-content">
            <TodoHeader todo={todo} progress={todo.progress}/>
            <p>{todo.body}</p>

            <div className="delete-todo-button"
              onClick={this._activateDeleteModal}
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
