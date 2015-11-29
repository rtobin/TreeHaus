var Navbar = React.createClass({

  getInitialState: function () {
    var user = UserStore.currentUser()  || {};
    return {
      user:  user,
      projects: ProjectStore.all(),
      currentProject: ProjectStore.currentProject()
    };
  },

  render: function () {
    return(
      <header className="header-main">
        <nav className="navbar">
          <LogoAdmin extra="admin-stuff"/>
          <NavbarList items={this.state} />
          <ProfileManager items={this.state}
                          location={this.props.location}
                          extra="profile-stuff"/>
        </nav>
      </header>
    );
  }
});
