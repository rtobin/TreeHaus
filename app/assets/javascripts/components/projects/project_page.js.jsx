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
      project: project || {},
      user: UserStore.currentUser(),
      location: this.props.location
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
    var Link = ReactRouter.Link;
    var projectURL = this.state.user.id + "/projects/" + this.state.project.id;
    var makeSidebar = "";
    if (this.props.location.pathname.split("/").length > 4) {
      makeSidebar += "-sidebar";
    }

    var renderedChildren = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);

    return (
      <div className="project-main">
        <h2 className="project-title">
          <Link to={projectURL + "/update"}>{this.state.project.title}</Link>
        </h2>
        <ProjectDock
          user={this.state.user}
          project={this.state.projcect}
          makeSidebar={makeSidebar}
          />
        {renderedChildren}
      </div>
    );
  }
});
