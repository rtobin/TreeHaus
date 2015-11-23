var ProfileManager = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
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
          <li>Personal Info (avatar, title, devices, etc)</li>
          <li><Signout/></li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div className="nav-profile" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        <span>▼</span><h3>RT</h3>
        {this.expandableItem()}
      </div>
    );
  }
});
