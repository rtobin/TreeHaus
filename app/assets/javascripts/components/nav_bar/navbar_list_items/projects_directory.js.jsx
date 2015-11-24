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
        var url = that.state.currentUser.id + "/projects/" + projectID;
        return (
          <li key={projectID}>
            {star}
            <Link to={ url}
              project={project}
              onClick={that.fetchProject}>
              {project.title}
            </Link>
          </li>
        );
      })
    );
  },

  expandedContent: function () {
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Name</span>
        </h3>
        <button href="" className="nav-menu-button">
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
