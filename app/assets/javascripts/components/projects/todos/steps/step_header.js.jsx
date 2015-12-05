var StepHeader = React.createClass ({
  render: function () {
    var author = this.props.step.author_name;
    var created_at = this.props.step.created_at;
    var updated_at = created_at !== this.props.updated_at ? this.props.updated_at : "";
    return (
      <header>
        <h1>{this.props.step.title}</h1>
        <h4>added on {created_at} by {author}. Updated at {updated_at}</h4>
      </header>
    )
  }
});
