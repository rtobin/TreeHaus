var TodoIndexItem = React.createClass({
  getInitialState: function(){
    var todo = this.props.todo || {};
    return {
      todo: todo,
      steps: todo.steps || {}
    };
  },

  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._updateSteps);
  },

  componentWillUnMount: function () {
    ProjectStore.removeStepsChangeListener(this._updateSteps);
  },

  _updateSteps: function () {
    this.setState({
      steps: ProjectStore.currentProject().todos[this.state.todo.id].steps
    })
  },

  render: function () {
    var that = this;
    var Link = ReactRouter.Link;
    var todoURL = this.props.params.userID + "/projects/";
    todoURL += this.props.params.projectID + "/todos/" + this.state.todo.id;
    return (
      <div className="todo-index-item">
        <Link to={todoURL}>
          <TodoHeader todo={this.state.todo} />
          <p>{this.state.todo.body}</p>
        </Link>
        <StepForm params={this.props.params} todo={this.state.todo}/>
        <div className="step-list">
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
        </div>
      </div>
    );
  }
});
