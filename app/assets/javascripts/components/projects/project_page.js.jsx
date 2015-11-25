var ProjectPage = React.createClass({
  render: function () {
    return (
      <div className="project-main">
        {this.props.children}
      </div>
    );
  }
});
