var ProjectsDirectory = React.createClass({
  mixins: [ReactRouter.History, ClickExpandable],

  getInitialState: function () {
    // # check how to get projectId from url........
    debugger
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
            <Link to={ that.state.currentUser.id + "/projects/" + projectID}
              project={project}
              className="project-button">
              {project.title}
            </Link>
          </li>
        );
      })
    );
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
