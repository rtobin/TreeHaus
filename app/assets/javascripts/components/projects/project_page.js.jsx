var ProjectPage = React.createClass({
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

  updateProject: function () {
    var project = ProjectStore.currentProject();
    this.setState({
      project: project,
      currentUser: UserStore.currentUser()
    });
  },

  componentDidMount: function () {
    ProjectStore.addCurrentProjectChangeListener(this.updateProject);
  },

  componentWillUnMount: function () {
    ProjectStore.removeCurrentProjectChangeListener(this.updateProject);
  },


  render: function () {
    return (
      <div className="project-main">
        {this.props.children}
      </div>
    );
  }
});
