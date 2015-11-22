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

  expandedContent: function () {
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Name</span>
        </h3>
        <ul className="stuff">
          <li className="stuff-text" href="">
            Project 1
          </li>
          <li className="stuff-text" href="">
            Project 2
          </li>
          <li className="stuff-text" href="">
            Project 3
          </li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Projects
        {this.expandableItem()}
      </div>
    );
  }
});
