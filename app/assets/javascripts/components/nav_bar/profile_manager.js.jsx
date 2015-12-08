var ProfileManager = React.createClass({
  mixins: [ClickExpandable],

  componentDidMount: function () {
    UserStore.addChangeListener(this._updateUserState);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this._updateUserState);
  },

  _updateUserState: function () {
    this.setState({user: UserStore.currentUser()});
  },

  getInitialState: function () {
    return {
      user: UserStore.currentUser(),
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    };
  },

  expandedContent: function () {
    var Link = ReactRouter.Link;
    return (
      <div href="" className="nav-menu-scroll nav-menu-content">
        <h3 className="nav-menu-heading">
          <span>Notifications (ON)</span>
        </h3>
        <p>You’re set to receive notifications 24/7/365 always. <a>Change schedule…</a></p>

        <button href="" className="nav-menu-button">
          Snooze for 3 hours
        </button>
        <button href="" className="nav-menu-button">
          Turn notifications off
        </button>

        <h3 className="nav-menu-heading">
          <span>My Stuff</span>
        </h3>
        <ul className="nav-menu-links">
          <li>My assignments</li>
          <li>Stuff I've assigned</li>
          <li>Saved drafts</li>
          <li>What have I been up to?</li>
          <li><a className="profile-modal-open" onClick={this._goToModal} >
              Personal Info (avatar, title, devices, etc)
            </a>
          </li>
          <li><a className="signout-modal-open" onClick={this._goToModal} >
            Sign out</a>

          </li>
        </ul>
      </div>
    );
  },

  _goToModal: function (e) {
    e.preventDefault();
    this.setState({expanded: false});
  },

  render: function () {
    var name = this.state.user.name || this.state.user.email;
    return (
      <div className="navbar-action nav-profile" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        <span>▼</span>
        <CurrentUserAvatar />
        {this.expandableItem()}
      </div>
    );
  }
});
