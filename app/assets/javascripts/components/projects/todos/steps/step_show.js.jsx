var StepShow = React.createClass({
  getInitialState: function () {
    var stepID = this.props.params.stepID;
    var step = ProjectStore.findStep(stepID) || {} ;
    return { step: step };
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
            <label>
              <strong>Due at:</strong>
              <span>{step.due_date}</span>
            </label>
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
