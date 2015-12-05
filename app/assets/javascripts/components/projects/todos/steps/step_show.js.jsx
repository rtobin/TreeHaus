var StepShow = React.createClass({
  getInitialState: function () {
    var stepID = this.props.params.stepID;
    var step = ProjectStore.findStep(stepID) || {} ;
    return { step: step };
  },

  _dueTimes: function () {
    var due_at = this.state.step.due_at || "no due time";
    var start_at = this.state.step.start_at;
    if (typeof start_at !== "undefined") {
      return (
        <label>
          <strong>Starts at:</strong>
          <div classname="step-detail">
            <span>{start_at}</span>
          </div>
          <strong>Due by:</strong>
          <div classname="step-detail">
            <span>{due_at}</span>
          </div>
        </label>
      )
    } else {
      return (
        <label>
          <strong>Due by:</strong>
          <div classname="step-detail">
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
    }
    return (
      <div className="panel">
        <article className="recordable">
          <StepHeader step={step} />
          <section className="step-details" >
            {this._dueTimes}
            <label>
              <strong>Assigned to:</strong>
              <span>{step.assignees}</span>
            </label>
            <label>
              <strong>Notes:</strong>
              <p>{step.body}</p>
            </label>

          </section>
        </article>
        <CommentList commentableParams={commentableParams}/>
      </div>
    )
  }
});
