var ProjectDock = React.createClass({
  getInitialState: function () {
    return {
      projectPath: this.props.location.pathname,
      title: ProjectStore.currentProject().title
    };

  },

  updateStuff: function () {
    var project = ProjectStore.currentProject();
    this.setState({
      projectPath: this.props.location.pathname,
      title: ProjectStore.currentProject().title
    });
  },

  componentDidMount: function () {
    ProjectStore.addCurrentProjectChangeListener(this.updateStuff);
  },

  componentWillUnMount: function () {
    ProjectStore.removeCurrentProjectChangeListener(this.updateStuff);
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="project-dock">
        <Link to={this.state.projectPath + "/update"}>{this.state.title}</Link>
        <ul className="dock-cards group">
          <li><ChatsCard projectpath={this.state.projectPath}/></li>
          <li><MessagesCard projectpath={this.state.projectPath}/></li>
          <li><ToDosCard projectpath={this.state.projectPath}/></li>
          <li><SchedulesCard projectpath={this.state.projectPath}/></li>
          <li><CheckInsCard projectpath={this.state.projectPath}/></li>
          <li><DocsCard projectpath={this.state.projectPath}/></li>
        </ul>
    </div>
    );
  }
});
