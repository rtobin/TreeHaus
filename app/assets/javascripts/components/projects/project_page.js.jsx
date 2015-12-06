var ProjectPage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    debugger
    var projectID = this.props.params.projectID;
    var project = this.props.projects[projectID] || {};
    ProjectStore.setCurrentProject(projectID);
    return {
      project: project || {},
      currentUser: this.props.currentUser,
      params: this.props.params
    };
  },

  componentDidMount: function () {
    ProjectStore.addProjectChangeListener(this._updateProject);
  },

  componentWillUnMount: function () {
    ProjectStore.removeProjectChangeListener(this._updateProject);
  },

  _updateProject: function () {
    var project = ProjectStore.currentProject();
    this.setState({
      project: project,
      user: UserStore.currentUser()
    });
  },


  render: function () {
    var Link = ReactRouter.Link;
    var projectURL = this.state.currentUser.id + "/projects/";
    projectURL += this.state.project.id;
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
          project={this.state.project}
          params={this.props.params}
          makeSidebar={makeSidebar}
          location={this.state.location}/>
        {renderedChildren}
      </div>
    );
  }
});
