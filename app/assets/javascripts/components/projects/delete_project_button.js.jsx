var DeleteProjectButton = React.createClass({
  _deleteProject: function() {
    debugger
    ProjectUtil.destroyProject({id: this.props.projectID})
  },

  render: function () {
    return (
      <div className="delete-project-button" onclick={this._deleteProject}></div>
    );
  }
});
