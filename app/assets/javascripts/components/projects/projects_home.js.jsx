var ProjectsHome = React.createClass({
  componentWillMount: function () {
  },


  getInitialState: function () {
    var projectID = this.props.location.pathname.split("/")[3];
    var project;
    if (projectID) {
      project = ProjectStore.find(parseInt(projectID));
      ProjectStore.setCurrentProject(project);
    }
    return {
      project: project,
      currentUser: UserStore.currentUser()
    };
  },

  render: function () {
    return (
      <div>
        <Navbar items={this.state} />
        {this.props.children}
      </div>
    );
  }
});
