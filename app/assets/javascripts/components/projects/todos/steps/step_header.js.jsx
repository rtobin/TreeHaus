var StepHeader = React.createClass ({
  render: function () {
    return (
      <header>
        {this.props.step.title}
      </header>
    )
  }
});
