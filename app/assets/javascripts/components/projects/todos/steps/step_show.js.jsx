var StepShow = React.createClass({
  getInitialState: function () {
    // for some reason params is not picking up stepID
    var stepID = this.props.params.stepID || this.props.location.pathname.split("/")[5];

    var step = ProjectStore.findStep(stepID) || {} ;
    return { step: step };
  },

  _dueTimes: function () {
    var due_at = this.state.step.due_at || "no due time";
    var start_at = this.state.step.start_at;
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
    var step = this.state.step;
    var commentableParams = {
      commentable_type: "Step",
      commentable_id: step.id
    };
    var todos = ProjectStore.currentProject().todos || {};
    var todo = todos[step.todo_id] || {};
    var todoTitle = todo.title;
    var navlinkTitles = ["Goals", todoTitle];
    var navlinkPaths = [
      this.props.params.userID + "/projects/" + this.props.params.projectID + "/todos",
      this.props.params.userID + "/projects/" + this.props.params.projectID + "/todos/" + step.todo_id
    ];
    return (
      <div className="panel">
        <article className="recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>

          <StepHeader step={step} projectID={this.props.params.projectID}/>
          <section className="step-details" >
            {this._dueTimes()}
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
        <CommentList commentableParams={commentableParams} projectID={this.props.params.projectID}/>
      </div>
    )
  }
});
