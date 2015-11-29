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
        {step.title}
      </div>
    );
  }
});
