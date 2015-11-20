var LogoAdmin = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <a href="#" className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h4 className="topnav-menu-heading">
          <span className="top">Ryan</span>
        </h4>
        <div className="">
          <a className="" href="#">
            Adminland - Upgrades, billing, people management, account administration
          </a>
        </div>
        <h4 className="topnav-menu-heading">
          <span>Switch accounts</span>
        </h4>
        <h4 className="topnav-menu-heading">
          <span className="bottom">Go Mobile</span>
        </h4>
      </a>
    );
  },

  render: function () {
    return (
      <ul className="topnav-item topnav-item-left list-unbulleted flush">
        <li className="topnav-menu topnav-menu-logo">
          {this.expandableItem()}
        Admin</li>
      </ul>
    );
  }
});
