var LogoAdmin = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
  },

  expandedContent: function () {
    return (
      <div href="#" className="nav-menu nav-menu-scroll menu-admin">
        <h3 className="nav-menu-heading">
          <span className="top">{UserStore.currentUserName()}</span>
        </h3>
        <div className="stuff">
          <a className="stuff-text" href="#">
            Adminland - Upgrades, billing, people management, account administration
          </a>
        </div>
        <h3 className="nav-menu-heading">
          <span>Switch accounts</span>
        </h3>
        <h3 className="nav-menu-heading">
          <span className="bottom">Go Mobile</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div className="navbar-action nav-logo" id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        <img className="nav-logo-img"/><span>▼</span>
        {this.expandableItem()}
      </div>
    );
  }
});
