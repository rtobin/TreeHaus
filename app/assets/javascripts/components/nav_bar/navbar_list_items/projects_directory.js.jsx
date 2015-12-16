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
            <Link to={url} key={projectID}
              onClick={that._getProject}
              data-projectid={projectID}>
              {project.title}
            </Link>
          </li>
        );
      })
    );
  },

  expandedContent: function () {
    var Link = ReactRouter.Link;
    var userID = this.props.params.userID;
    var name = UserStore.currentUserName() ;
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Directory</span>
        </h3>

        <ul className="nav-menu-links">
          <li><Link to={userID + "/projects/new"}>New Project</Link></li>
          {this.projectLinksList()}
          <li><Link to={userID + "/projects"}>Index Page</Link></li>
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
