var Navbar = React.createClass({
  render: function () {
    return(
      <header className="header-main">
        <nav className="navbar">
          <LogoAdmin extra="admin-stuff"/>
          <NavbarList items={this.props.items} />
          <ProfileManager location={this.props.location} extra="profile-stuff"/>
        </nav>
      </header>
    );
  }
});
