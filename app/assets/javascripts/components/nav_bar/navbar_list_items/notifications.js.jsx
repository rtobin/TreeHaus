var Notifications = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">***BONUS FEATURE***</span>
        </h3>
        <ul className="stuff">
          <li className="stuff-text" href="">
            3 unread pings
          </li>
          <li className="stuff-text" href="">
            4 unread messages
          </li>
          <li className="stuff-text" href="">
            2 new mentions
          </li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Hey!
        {this.expandableItem()}
      </div>
    );
  }
});
