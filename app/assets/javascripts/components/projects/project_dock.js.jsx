var ProjectDock = React.createClass({
  getInitialState: function () {
    return {
      projectPath: this._getProjectURL(),
      title: ProjectStore.currentProject().title,
      sidebarLocked: false
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

  _handleCheckbox: function (e) {
    if (this.props.makeSidebar === "-sidebar" && e.target.checked) {
      this.setState({sidebarLocked: true});
    } else {
      this.setState({sidebarLocked: false});

    }
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
    var isLocked = "", hideCheckbox = {};
    if (this.state.sidebarLocked) {
      isLocked = " sidebar-locked";
    }
    if (this.props.makeSidebar !== "-sidebar") {
      hideCheckbox.display = "none";
    }

    return (
      <div className={"project-dock" + this.props.makeSidebar + isLocked}>
        <div className="sidebar-lock-checkbox" style={hideCheckbox}>
          <label for="sidebar-lock"><span>lock sidebar</span></label>
          <input type="checkbox" id="sidebar-lock" onChange={this._handleCheckbox}/>
        </div>
        <ul className={"group dock-cards" + this.props.makeSidebar}>
          <li><ChatsCard projectpath={this.state.projectPath}/></li>
          <li><MessagesCard projectpath={this.state.projectPath}/></li>
          <li><ToDosCard projectpath={this.state.projectPath}/></li>
          <li><SchedulesCard projectpath={this.state.projectPath}/></li>
          <li><CheckInsCard projectpath={this.state.projectPath}/></li>
          <li><DocsCard projectpath={this.state.projectPath}/></li>
        </ul>
        <div className="sidebar-arrow">⟫</div>
        {this.props.children}
    </div>
    );
  }
});
