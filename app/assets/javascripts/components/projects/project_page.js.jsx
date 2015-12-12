var ProjectPage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var projectID = this.props.params.projectID;
    var project = this.props.projects[projectID] || {};
    ProjectStore.setCurrentProject(projectID);
    return {
      projectID: projectID,
      project: project || {},
      currentUser: this.props.currentUser,
      // params: this.props.params
    };
  },

  componentDidMount: function () {
    ProjectStore.addProjectChangeListener(this._updateProject);
    ProjectUtil.fetchProject(this.state.projectID);
    MemberUtil.fetchMembers(this.state.projectID);
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
    var projectURL = this.props.params.userID + "/projects/";
    projectURL += this.props.params.projectID;
    var makeSidebar = "";
    if (this.props.location.pathname.split("/").length > 4) {
      makeSidebar += "-sidebar";
    }

    var renderedChildren = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);

    return (
      <div className="project-main">
        <h2 className={"project-header" + makeSidebar}>
          <Link className="project-title" to={projectURL}>{this.state.project.title}</Link>
          <Link to={projectURL + "/settings"}>
            <div className={"settings-link" + makeSidebar}></div>
          </Link>
        </h2>
        <p>{makeSidebar === "-sidebar" ? "" : this.state.project.description}</p>
        <div className={"members" + makeSidebar}>
          <MembersIndex params={this.props.params} />
        </div>
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
