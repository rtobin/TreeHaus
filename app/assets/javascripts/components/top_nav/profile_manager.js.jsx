var ProfileManager = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    var Link = ReactRouter.Link;
    return (
      <div href="#" className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">Notifications (ON)</span>
        </h3>
        <p>You’re set to receive notifications 24/7/365 always. <a>Change schedule…</a></p>
        <div className="topnav-menu-buttons">
          <button className="stuff-text" href="#">
            Snooze for 3 hours
          </button>
          <button className="stuff-text" href="#">
            Turn notifications off
          </button>
        </div>
        <h3 className="topnav-menu-heading">
          <span>My Stuff</span>
        </h3>
        <ul className="topnav-menu-links">
          <li className="topnav-menu-link-item">My assignments</li>
          <li className="topnav-menu-link-item">Stuff I've assigned</li>
          <li className="topnav-menu-link-item">Saved drafts</li>
          <li className="topnav-menu-link-item">What have I been up to?</li>
          <li className="topnav-menu-link-item">Personal Info (avatar, title, devices, etc)</li>
          <li className="topnav-menu-link-item"><Link to="/login">Sign out</Link></li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        RT (avator)
        {this.expandableItem()}
      </div>
    );
  }
});
