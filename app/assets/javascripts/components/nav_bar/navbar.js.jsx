var Navbar = React.createClass({
  render: function () {
    return(
      <header className="header-main">
        <nav className="navbar">
          <LogoAdmin extra="admin-stuff"/>
          <NavbarList />
          <ProfileManager extra="profile-stuff"/>
        </nav>
      </header>
    );
  }
});
