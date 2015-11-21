var LogoAdmin = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div href="#" className="nav-menu-scroll nav-menu-content">
        <h3 className="topnav-menu-heading">
          <span className="top">Ryan</span>
        </h3>
        <div className="stuff">
          <a className="stuff-text" href="#">
            Adminland - Upgrades, billing, people management, account administration
          </a>
        </div>
        <h3 className="topnav-menu-heading">
          <span>Switch accounts</span>
        </h3>
        <h3 className="topnav-menu-heading">
          <span className="bottom">Go Mobile</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Admin
        {this.expandableItem()}
      </div>
    );
  }
});
