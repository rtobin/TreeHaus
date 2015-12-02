var StepsListItem = React.createClass({
  getInitialState: function(){
    return {
      todoID: this.props.todoID,
      step: this.props.step
    };
  },

  render: function () {
    var Link = ReactRouter.Link;
    var step = this.state.step;

    return (
      <div className="step-list-item">
        <span className="todo-drag-handle">=</span>
        <div className="step-checkbox">
          <input type="checkbox" id="step-done"
            value="step-done"
            checked={step.done}
            onChange={this._handleCheckbox}/>
          <span className="step-checkbox-content">
            <a>{step.title}</a>
            <small>{" " + step.num_comments + " comments"}</small>
          </span>
        </div>
      </div>
    );
  }
});
