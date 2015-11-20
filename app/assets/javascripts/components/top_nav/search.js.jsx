var Search= React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">What are you looking for?</span>
        </h3>
        <div className="stuff">
          <a className="stuff-text" href="#">
            ***BONUS FEATURE***
          </a>
          <p>Search for anything in your projects.</p>
        </div>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Find
        {this.expandableItem()}
      </div>
    );
  }
});
