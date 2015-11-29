var ProjectDock = React.createClass({
  getInitialState: function () {
    return {
      projectPath: this._getProjectURL(),
      title: ProjectStore.currentProject().title
    };

  },

  _getProjectURL: function () {
    var userID = UserStore.currentUser().id;
    var projectID = ProjectStore.currentProject().id;
    return userID + "/projects/" + projectID;
  },

  _updateStuff: function () {
    this.setState({
      projectPath: this._getProjectURL(),
      title: ProjectStore.currentProject().title
    });
  },

  componentDidMount: function () {
    ProjectStore.addCurrentProjectChangeListener(this._updateStuff);
  },

  componentWillUnMount: function () {
    ProjectStore.removeCurrentProjectChangeListener(this._updateStuff);
  },

  componentWillReceiveProps: function () {
    this.setState({

    })
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
        {this.props.children}
    </div>
    );
  }
});
