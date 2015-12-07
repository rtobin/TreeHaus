var ProjectsDirectory = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    var project = {};
    var projectID = this.props.params.projectID;
    if (typeof projectID !== "undefined") {
      project = this.props.projects[projectID];
    }
    return {
      currentProject: project,
      projects: this.props.projects,
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._getProjects);
  },

  componentWillUnMount: function () {
    ProjectStore.removeChangeListener(this._getProjects);
  },

  _getProjects: function () {
    this.setState({
      projects: ProjectStore.all()
    });
  },

  _getProject: function (e) {
    this.setState({expanded: false})
    var projectID = e.currentTarget.dataset["projectid"];
    ProjectUtil.fetchProject(projectID);
  },

  projectLinksList: function () {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var userID = this.props.params.userID;
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        var url = userID + "/projects/" + projectID;
        return (
          <li key={projectID}>
            <Link to={url} key={projectID} className="project-button"
              onClick={that._getProject}
              data-projectid={projectID}>
              {project.title}
            </Link>
          </li>
        );
      })
    );
  },

  // handleProjectLinkClick: function (e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this.setState({expanded: false});
  //   var projectID = e.currentTarget.href.split("/")[3];
  //   var project = this.state.projects[projectID];
  //   var url = this.state.currentUser.id + "/projects/" + projectID;
  //   ProjectActions.singleProjectReceived(project);
  //   this.history.pushState(null, "/" + url);
  // },

  expandedContent: function () {
    var Link = ReactRouter.Link;
    var userID = this.props.params.userID;
    var name = this.props.currentUser.name;
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">{name}</span>
        </h3>
        <Link to={userID + "/projects/new"}
          className="project-button new-project">
          +
        </Link>

        <ul className="project-links-list">
          {this.projectLinksList()}
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div className="navbar-action" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        Projects
        {this.expandableItem()}
      </div>
    );
  }
});
