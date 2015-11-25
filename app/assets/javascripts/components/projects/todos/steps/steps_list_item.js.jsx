var StepsListItem = React.createClass({
  getInitialState: function(){
    return {
      todoID: this.props.todoID,
      stepID: this.props.stepID,
      step: this.props.step
    };
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="step-list-item">{this.state.step.title}</div>
    );
  }
});
