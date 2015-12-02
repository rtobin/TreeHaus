var StepShow = React.createClass({
  render: function () {
    var step = this.props.step;
    var commentableParams = {
      commentable_type: "Step",
      commentable_id: step.id
    }
    return (
      <div className="panel">
        <article className="recordable">
          <StepHeader step={step} />

          <section className="step-details" >
            <Label>
              <strong>Due at:</strong>
              <span>{step.due_date}</span>
            </Label>
            <Label>
              <strong>Assigned to:</strong>
              <span>{step.assignees}</span>
            </Label>
            <Label>
              <strong>Notes:</strong>
              <p>{step.body}</p>
            </Label>

          </section>
        </article>
        <CommentList commentableParams={commentableParams}/>
      </div>
    )
  }
});
