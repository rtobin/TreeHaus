var Trees = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">Name</span>
        </h3>
        <ul className="stuff">
          <li className="stuff-text" href="">
            Project 1
          </li>
          <li className="stuff-text" href="">
            Project 2
          </li>
          <li className="stuff-text" href="">
            Project 3
          </li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Trees
        {this.expandableItem()}
      </div>
    );
  }
});
