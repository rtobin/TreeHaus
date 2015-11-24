var ProjectsDirectory = React.createClass({
  mixins: [ReactRouter.History, ClickExpandable],

  getInitialState: function () {
    // # check how to get projectId from url........
    return {
      currentUser: this.props.items.currentUser,
      currentProject: this.props.items.project || {},
      projects: this.props.items.currentUser.projects || {},
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    };
  },

  updateProjects: function () {
    this.setState({
      project: ProjectStore.all()
    });
  },

  componentWillMount: function () {
    ProjectStore.addChangeListener(this.updateProjects);
  },

  getProjectLinks: function () {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var star;
    if (this.state.currentProject.id >= 0 &&
      this.state.currentProject.id === projectID) {
      star = (<strong>✶</strong>);
    }
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        return (
          <li key={projectID}>
            {star}
            <button
              projectID={projectID}
              className="project-dir-button"
              onClick={
                function (e) {
                  that.toggleExpand(e);
                  that.history.pushState(null, that.state.currentUser.id + "/projects/" + projectID);
                }
              }>
              {project.title}
            </button>
          </li>
        );
      })
    );
  },

  handleDirToProjectClick: function (e) {
    debugger
    this.toggleExpand(e);
    this.history.pushState(null, this.state.currentUser.id + "/projects/");
  },

  handleMakeNewClick: function (e) {
    this.toggleExpand(e);
    this.history.pushState(null, this.state.currentUser.id + "/projects/new");
  },

  expandedContent: function () {
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Name</span>
        </h3>
        <button
          href=""
          className="nav-menu-button"
          onClick={this.handleMakeNewClick}>
          Make a new Project
        </button>

        <ul className="project-links-list">
          {this.getProjectLinks()}
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        Projects
        {this.expandableItem()}
      </div>
    );
  }
});
