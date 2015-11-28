var Pings = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
  },

  expandedContent: function () {
    return (
      <div className=" nav-menu nav-menu-scroll pings">
        <PingSearch />
        <h3 className="nav-menu-heading">
          <span className="top">Recent Pings</span>
        </h3>
        <ol className="stuff">
          <li className="stuff-text" href="">
            Jane: "Where is the toilet paper??!"
          </li>
          <li className="stuff-text" href="">
            Jane: "This is an emergency!!!"
          </li>
          <li className="stuff-text" href="">
            Jim: "I think Jane needs new pants..."
          </li>
        </ol>
        <h3 className="nav-menu-heading">
          <span className="bonus">***BONUS FEATURE***</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div className="navbar-action" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        Pings
        {this.expandableItem()}
      </div>
    );
  }
});
