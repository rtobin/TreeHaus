var Search= React.createClass({
  mixins: [ClickExpandable],


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
      <div className="find" id={this.state.selector}
        onClick={this.toggleExpand}>
        <div id="magnify-glass"></div>
        Find
        {this.expandableItem()}
      </div>
    );
  }
});
