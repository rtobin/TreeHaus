var ProjectsHome = React.createClass({
  getInitialState: function () {
    return {
      currentUser: this.props.currentUser,
      projects: this.props.projects
      // notifications
    };
  },

  _placeModals: function () {
    if (UserStore.isSignedIn()){
      return (
        <div className="profile-modals">
          <SignoutModal />
          <ProfileUpdateModal params={this.props.params}/>
        </div>
      );
    }
  },

  render: function () {
    var renderedChildren = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);

    return (
      <div className="home">
        <Navbar location={this.props.location}
          currentUser={this.props.currentUser}
          projects={this.props.projects}
          params={this.props.params}/>
        {renderedChildren}
        {this._placeModals()}
      </div>
    );
  }
});
