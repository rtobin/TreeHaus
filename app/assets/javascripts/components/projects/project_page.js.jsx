var ProjectPage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var projectID = this.props.location.pathname.split("/")[3];
    var project;
    if (projectID) {
      project = ProjectStore.find(parseInt(projectID));
      ProjectStore.setCurrentProject(project);
    }
    return {
      project: project,
      user: UserStore.currentUser()
    };
  },

  _updateProject: function () {
    var project = ProjectStore.currentProject();
    this.setState({
      project: project,
      user: UserStore.currentUser()
    });
  },

  componentDidMount: function () {
    if (typeof ProjectStore.currentProject().id === "undefined") {
      this.history.pushState(null,"/signin")
    }
    UserStore.addChangeListener(this._updateProject);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this._updateProject);
  },

  render: function () {
    return (
      <div className="project-main">
        <ProjectDock
          user={this.state.user}
          project={this.state.projcect}
          />
        {this.props.children}
      </div>
    );
  }
});
