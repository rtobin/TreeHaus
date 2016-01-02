var TodoIndexItem = React.createClass({
  getInitialState: function(){
    var todo = this.props.todo || {};
    return {
      todo: todo,
      steps: todo.steps || {},
      changed: false
    };
  },

  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._updateSteps);
    $( "#step-list" + this.state.todo.id ).sortable({
      revert: true,
      handle: ".step-drag-handle",
      axis: "y"
    });
    $( "ul, li" ).disableSelection();
  },

  componentWillUnMount: function () {
    ProjectStore.removeStepsChangeListener(this._updateSteps);
  },

  _updateSteps: function () {
    var newSteps = ProjectStore.currentProject().todos[this.state.todo.id].steps || {};
    if (this.state.steps != newSteps) {
      this.setState({
        steps: newSteps
      });
    }
  },

  render: function () {
    var that = this;
    var Link = ReactRouter.Link;
    var todo = this.state.todo;
    var todoURL = this.props.params.userID + "/projects/";
    todoURL += this.props.params.projectID + "/todos/" + todo.id;
    return (
      <li className="todo-index-item">
        <section>
          <Link to={todoURL}>
            <div className="todo-drag-handle" id="todo-drag-handle"></div>
            <TodoHeader todo={todo} progress={todo.progress}/>
            <p className="indent">{todo.body}</p>
          </Link>
          <StepForm params={this.props.params} todo={todo}/>
          <ul className="step-list group" id={"step-list" + todo.id}>
            {
              Object.keys(this.state.steps).map(function(stepID) {
                var step = that.state.steps[stepID];
                return(
                  <StepsListItem key={that.state.todo.id + "." + step.id}
                    step={step}
                    params={that.props.params}/>
                );
              })
            }
          </ul>
        </section>
      </li>
    );
  }
});
