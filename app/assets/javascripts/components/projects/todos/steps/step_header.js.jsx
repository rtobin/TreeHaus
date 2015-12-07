var StepHeader = React.createClass ({
  // getInitialState: function () {
  //   var step = this.props.step;
  //   return { step: step };
  // },
  //
  // componentDidMount: function () {
  //   ProjectStore.addStepsChangeListener(this._getStep)
  // },
  //
  // componentWillUnmount: function () {
  //   ProjectStore.removeStepsChangeListener(this._getStep)
  // },
  //
  // _getStep: function () {
  //   this.setState({
  //     step: ProjectStore.getTodoStep(this.state.step.id, this.state.step.todo_id)
  //   });
  //   ProjectUtil.fetchProject(this.props.projectID);
  // },

  _handleCheckbox: function (e) {
    e.preventDefault();
    // var step = $.extend({}, this.state.step);
    var step = this.props.step;
    step.done = !step.done;
    var stepParams = {
      id: step.id,
      step: step,
      projectID: this.props.projectID,
      todoID: step.todo_id
    }
    TodoUtil.updateStep(stepParams);
  },

  render: function () {
    var stepID = this.props.stepID;
    var step = ProjectStore.findStep(stepID) || {};
    var author = step.author_name;
    var date = step.created_at_in_words;
    var action = "added";
    // if (step.updated_at !== step.created_at) {
    //   date = step.updated_at_in_words;
    //   action = "updated"
    // } // need to get the user name that updates step...
    var commentableParams = {
      commentable_type: "Step",
      commentable_id: stepID
    }
    var that = this;
    return (
      <header>
        <h1>{step.title}</h1>
        <CommentsCountBubble
          commentableParams={commentableParams}
          numComments={step.num_comments} />
        <h4>{action} on {date} by {author}.</h4>
        <div className="step-checkbox">
          <input type="checkbox" id="step-done"
            value="step-done"
            checked={step.done}
            onChange={function(e) {
              step.done = !step.done;
              var stepParams = {
                id: step.id,
                step: step,
                projectID: that.props.params.projectID,
                todoID: step.todo_id
              };
              TodoUtil.updateStep(stepParams);
            }}/>
          <span className="step-checkbox-content">
            {step.done ? "(task is completed)" : "(task is not completed)"}
          </span>
        </div>
      </header>
    )
  }
});
