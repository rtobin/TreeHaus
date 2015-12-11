var StepShow = React.createClass({
  getInitialState: function () {
    var stepID = this.props.params.stepID || this.props.location.pathname.split("/")[5];
    var step = ProjectStore.findStep(stepID) || {} ;
    return {
      stepID: stepID,
      step: step
    };
  },

  componentDidMount: function () {
    ProjectStore.addProjectChangeListener(this._getStep);
    ProjectStore.addStepsChangeListener(this._getStepAndFetchProject);
  },

  componentWillUnmount: function () {
    ProjectStore.removeProjectChangeListener(this._getStep);
    ProjectStore.removeStepsChangeListener(this._getStepAndFetchProject)
  },

  _getStep: function () {
    this.setState({
      step: ProjectStore.findStep(this.state.stepID)
    });
  },

  _getStepAndFetchProject: function () {
    this.setState({
      step: ProjectStore.findStep(this.state.stepID)
    });
    ProjectUtil.fetchProject(this.props.params.projectID);
  },

  _dueTimes: function (step) {
    var step = this.state.step;
    var due_at = step.due_at || "no due time";
    var start_at = step.start_at;
    if (start_at) {
      return (
        <label>
          <strong>Starts at:</strong>
          <div className="step-detail">
            <span>{start_at}</span>
          </div>
          <strong>Due by:</strong>
          <div className="step-detail">
            <span>{due_at}</span>
          </div>
        </label>
      )
    } else {
      return (
        <label>
          <strong>Due by:</strong>
          <div className="step-detail">
            <span>{due_at}</span>
          </div>
        </label>
      )
    }
  },

  render: function () {
    var userID = this.props.params.userID;
    var projectID = this.props.params.projectID;
    var step = this.state.step;
    var commentableParams = {
      commentable_type: "Step",
      commentable_id: this.props.params.stepID
    };
    var todos = ProjectStore.currentProject().todos || {};
    var todo = todos[step.todo_id] || {};
    var todoTitle = todo.title;
    var navlinkTitles = ["Goals", todoTitle];
    var navlinkPaths = [
      userID + "/projects/" + projectID + "/todos",
      userID + "/projects/" + projectID + "/todos/" + step.todo_id
    ];
    return (
      <div className="panel">
        <article className="recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <StepHeader params={this.props.params} step={step} stepID={this.state.stepID}/>
          <p>{step.body}</p>
          <section className="step-details" >
            {this._dueTimes(step)}
            <label>
              <strong>Assigned to:</strong>
              <span className="step-detail">{step.assignees }</span>
            </label>
            <label>
              <strong>Notes:</strong>
              <p className="step-detail">{step.body}</p>
            </label>

          </section>
        </article>
        <CommentList commentableParams={commentableParams} projectID={projectID}/>
      </div>
    )
  }
});
