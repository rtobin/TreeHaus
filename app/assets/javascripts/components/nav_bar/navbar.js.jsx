var Navbar = React.createClass({
  render: function () {
    return(
      <header className="header-main">
        <nav className="navbar">
          <LogoAdmin />
          <NavbarList />
          <ProfileManager />
        </nav>
      </header>
    );
  }
});
