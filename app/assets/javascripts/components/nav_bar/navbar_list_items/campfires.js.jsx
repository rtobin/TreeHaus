var Campfires = React.createClass({
  mixins: [ClickExpandable],

  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">***BONUS FEATURE***</span>
        </h3>
        <h3 className="topnav-menu-heading">
          <span className="top">Following</span>
        </h3>
        <ul className="stuff">
          <li className="stuff-text" href="">
            Thanksgiving potluck
          </li>
          <li className="stuff-text" href="">
            Trip to Moon
          </li>
          <li className="stuff-text" href="">
            Taking over Canada
          </li>
          <li className="stuff-text" href="">
            Life on Mars
          </li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Campfires
        {this.expandableItem()}
      </div>
    );
  }
});
