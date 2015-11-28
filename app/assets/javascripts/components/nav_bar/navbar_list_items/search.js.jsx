var Search= React.createClass({
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
        <h3 className="pnav-menu-heading">
          <span className="top">What are you looking for?</span>
        </h3>
        <div className="stuff">
          <p>Search for anything in your projects.</p>
        </div>
        <h3 className="nav-menu-heading">
          <span className="bonus">***BONUS FEATURE***</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div className="navbar-action find" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        <div id="magnify-glass"></div>
        Find
        {this.expandableItem()}
      </div>
    );
  }
});
