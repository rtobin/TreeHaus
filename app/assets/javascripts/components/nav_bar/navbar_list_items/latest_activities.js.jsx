var LatestActivity = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
  },

  expandedContent: function () {
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">Ryan</span>
        </h3>
        <h3 className="nav-menu-heading">
          <span className="bonus">***BONUS FEATURE***</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div className= "activities" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        <div id="navbar-clock"></div>
        Latest Activities
        {this.expandableItem()}
      </div>
    );
  }
});
