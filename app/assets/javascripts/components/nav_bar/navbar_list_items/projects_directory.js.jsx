var ProjectsDirectory = React.createClass({
  mixins: [ReactRouter.History, ClickExpandable],

  componentDidMount: function () {
    UserStore.addChangeListener(this._update);
    ProjectStore.addCurrentProjectChangeListener(this._updateCurrentProject);

  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this._update);
    ProjectStore.removeCurrentProjectChangeListener(this._updateCurrentProject);

  },



  getInitialState: function () {
    var user = UserStore.currentUser()  || {};
    return {
      currentUser: user,
      currentProject: ProjectStore.currentProject(),
      projects: ProjectStore.all(),
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    };
  },

  _update: function () {
    this.setState({
      projects: ProjectStore.all(),
      currentUser: UserStore.currentUser(),
      currentProject: ProjectStore.currentProject()
    })
  },

  _updateCurrentProject: function () {
    this.setState({currentProject: ProjectStore.currentProject()})
  },

  projectLinksList: function () {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        return (
          <li key={projectID}>
            <a
              project={project}
              className="project-button"
              href={projectID}
              onClick={that.handleProjectLinkClick}>
              {project.title}
            </a>
          </li>
        );
      })
    );
  },

  handleProjectLinkClick: function (e) {
    e.stopPropagation();
    e.preventDefault();
    debugger
    this.setState({expanded: false});
    var projectID = e.currentTarget.href.split("/")[3];
    var project = this.state.projects[projectID];
    var url = this.state.currentUser.id + "/projects/" + projectID;
    ProjectActions.singleProjectReceived(project);
    this.history.pushState(null, "/" + url);
  },

  expandedContent: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Name</span>
        </h3>
        <Link to={this.state.currentUser.id + "/projects/new"}
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
