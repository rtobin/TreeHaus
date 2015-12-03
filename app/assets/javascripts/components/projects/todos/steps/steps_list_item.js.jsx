var StepsListItem = React.createClass({
  getInitialState: function(){
    return {
      step: this.props.step
    };
  },

  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._updateStep)
  },

  componentWillUnmount: function () {
    ProjectStore.removeStepsChangeListener(this._updateStep)
  },

  _updateStep: function () {
    this.setState({
      step: ProjectStore.getStep(this.props.step.id, this.props.step.todo_id)
    })
  },

  _handleCheckbox: function (e) {
    e.preventDefault();
    var step = $.extend({}, this.state.step);
    step.done = !step.done;
    var stepParams = {
      id: step.id,
      step: step,
      projectID: this.props.params.projectID,
      todoID: this.props.params.stepID
    }
    TodoUtil.updateStep(step);
  },

  render: function () {
    var Link = ReactRouter.Link;
    var step = this.props.step;
    var stepURL = this.props.params.userID + "/projects/";
    stepURL += this.props.params.projectID + "/steps/" + step.id;
    return (
      <div className="step-list-item">
        <span className="todo-drag-handle">=</span>
        <div className="step-checkbox">
          <input type="checkbox" id="step-done"
            value="step-done"
            checked={step.done}
            onChange={this._handleCheckbox}/>
          <span className="step-checkbox-content">
            <Link to={stepURL} >
              {step.title}
            </Link>
            <small>{" " + step.num_comments + " comments"}</small>
          </span>
        </div>
      </div>
    );
  }
});
