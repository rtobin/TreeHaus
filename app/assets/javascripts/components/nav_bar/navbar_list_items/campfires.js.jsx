var Campfires = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    };
  },

  expandedContent: function () {
    return (
      <div className="chats nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
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
        <h3 className="nav-menu-heading">
          <span className="top">***BONUS FEATURE***</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div className="navbar-action" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        Campfires
        {this.expandableItem()}
      </div>
    );
  }
});
