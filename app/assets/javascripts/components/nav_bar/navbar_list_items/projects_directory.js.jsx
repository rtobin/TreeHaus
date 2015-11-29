var ProjectsDirectory = React.createClass({
  mixins: [ReactRouter.History, ClickExpandable],

  getInitialState: function () {
    return {
      currentUser: {},
      currentProject: {},
      projects: {},
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    };
  },

  componentDidMount: function () {
    ProjectStore.addCurrentProjectChangeListener(this._updateCurrentProject);
  },

  componentWillUnMount: function () {
    ProjectStore.removeCurrentProjectChangeListener(this._updateCurrentProject);
  },

  componentWillReceiveProps: function (nextProps) {
    debugger
    this.setState({
      currentUser: nextProps.items.user,
      currentProject: nextProps.items.currentProject || {},
      projects: nextProps.items.projects || {},
    })
  },

  _updateCurrentProject: function () {
    this.setState({currentProject: ProjectStore.currentProject()})
  },

  projectLinksList: function () {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    // var star;
    // if (this.state.currentProject.id >= 0 &&
    //   this.state.currentProject.id === projectID) {
    //   star = (<strong>✶</strong>);
    // }
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        return (
          <li key={projectID}>
            <a
              project={project}
              className="project-button"
              href={"#/" + projectID}
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
    this.setState({expanded: false});
    var project = this.state.projects[e.currentTarget.href.split("/")[4]];
    var url = this.state.currentUser.id + "/projects/" + project.id;
    ProjectActions.singleProjectReceived(project);
    this.history.pushState(null, url)
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
