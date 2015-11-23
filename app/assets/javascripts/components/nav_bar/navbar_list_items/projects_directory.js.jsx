var ProjectsDirectory = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    // # check how to get projectId from url........
      debugger
    return {
      currentProjectID: this.props.projectID || -1,
      projects: ProjectStore.all(),
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


  projectsListLinkItem: function (project) {
    var Link = ReactRouter.Link;
    var star;
    if (this.state.currentProjectID >= 0 &&
      this.state.currentProjectID === project.id) {
      star = (<strong>✶</strong>);
    }

    return (
      <li>
        {star}
        <Link to={"projects/" + project.id}>project.title</Link>
      </li>
    );
  },



  expandedContent: function () {
    debugger
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Name</span>
        </h3>
        <button href="" className="nav-menu-button">
          Make a new Project
        </button>

        <ul className="project-links-list">
          {this.state.projects.map(function (project, idx) {
            return this.projectsListLinkItem(project);
          })}
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
