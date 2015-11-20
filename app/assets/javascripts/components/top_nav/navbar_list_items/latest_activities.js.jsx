var LatestActivity = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">Ryan</span>
        </h3>
        <div className="stuff">
          <a className="stuff-text" href="#">
            WORK IN PROGRESS... ;-)
          </a>
        </div>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Latest Activities
        {this.expandableItem()}
      </div>
    );
  }
});
