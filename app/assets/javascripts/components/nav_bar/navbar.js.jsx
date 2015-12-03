var Navbar = React.createClass({
  render: function () {
    return(
      <header className="header-main">
        <nav className="navbar">
          <LogoAdmin extra="admin-stuff"/>
          <NavbarList location={this.props.location}
            currentUser={this.props.currentUser}
            projects={this.props.projects}
            params={this.props.params} />
          <ProfileManager extra="profile-stuff"/>
        </nav>
      </header>
    );
  }
});
