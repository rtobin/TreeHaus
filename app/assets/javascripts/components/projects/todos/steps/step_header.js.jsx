var StepHeader = React.createClass ({
  getInitialState: function () {
    var step = this.props.step;
    return { step: step };
  },

  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._getStep)
  },

  componentWillUnmount: function () {
    ProjectStore.removeStepsChangeListener(this._getStep)
  },

  _getStep: function () {
    this.setState({
      step: ProjectStore.getTodoStep(this.state.step.id, this.state.step.todo_id)
    })
  },

  _handleCheckbox: function (e) {
    e.preventDefault();
    var step = $.extend({}, this.state.step);
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
    var step = this.state.step;
    var author = step.author_name;
    var created_at = step.created_at;
    return (
      <header>
        <h1>{step.title}</h1>
        <h4>added on {created_at} by {author}.</h4>
        <div className="step-checkbox">
          <input type="checkbox" id="step-done"
            value="step-done"
            checked={step.done}
            onChange={this._handleCheckbox}/>
          <span className="step-checkbox-content">
            {step.done ? "completed" : "incomplete"}
          </span>
        </div>
      </header>
    )
  }
});
