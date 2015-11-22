var Notifications = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
  },

  expandedContent: function () {
    return (
      <div className="nav-menu-scroll nav-menu-content">
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
        <h3 className="nav-menu-heading">
          <span className="bonus">***BONUS FEATURE***</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        Hey!
        {this.expandableItem()}
      </div>
    );
  }
});
