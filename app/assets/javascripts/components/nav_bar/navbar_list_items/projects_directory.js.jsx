var ProjectsDirectory = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      currentProject: ProjectStore.currentProject(),
      projects: ProjectStore.all(),
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
  },

  componentWillMount: function () {
    ProjectStore.addChangeListener(this.fetchCurrentProject);
    ProjectStore.addProjectsListChangeListener(this.fetchProjectsList);
  },

  fetchCurrentProject: function () {
    this.setState({
      currentProject: ProjectStore.currentProject()
    });
  },

  fetchProjectsList: function () {
    this.setState({
      projects: ProjectStore.all()
    });
  },

  projectsListLinkItem: function (project) {
    var Link = ReactRouter.Link;
    var star;
    if (this.state.currentProject().id === project.id) {
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
