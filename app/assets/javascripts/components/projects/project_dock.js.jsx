var ProjectDock = React.createClass({
  getInitialState: function () {
    return {
      sidebarLocked: false
    };

  },

  _handleCheckbox: function (e) {
    if (this.props.makeSidebar === "-sidebar" && e.target.checked) {
      this.setState({sidebarLocked: true});
    } else {
      this.setState({sidebarLocked: false});
    }
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
          <label>
            <span>lock sidebar</span>
            <input type="checkbox" id="sidebar-lock"
              onChange={this._handleCheckbox}/>
          </label>
        </div>
        <ul className={"group dock-cards" + this.props.makeSidebar}>
          <li><ChatsCard params={this.props.params}/></li>
          <li><MessagesCard params={this.props.params}/></li>
          <li>
            <ToDosCard
              params={this.props.params}
              project={this.props.project}/></li>
          <li><SchedulesCard params={this.props.params}/></li>
          <li><CheckInsCard params={this.props.params}/></li>
          <li><DocsCard params={this.props.params}/></li>
        </ul>
        <div className="sidebar-arrow">⟫</div>
      </div>
    );
  }
});
