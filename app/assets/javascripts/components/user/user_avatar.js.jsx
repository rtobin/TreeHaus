var CurrentUserAvatar = React.createClass({
  componentDidMount: function () {
    UserStore.addChangeListener(this._updateUserState);
    UserStore.addUpdateUserListener(this._updateUserState);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this._updateUserState);
    UserStore.removeUpdateUserListener(this._updateUserState);
  },

  _updateUserState: function () {
    this.setState({user: UserStore.currentUser()});
  },

  getInitialState: function () {
    return {
      user: UserStore.currentUser(),
    };
  },

  render: function () {
    var displayInitial;
    var name = this.state.user.name || this.state.user.email.split("@")[0];
    var avatar_url = this.state.user.avatar_url || "";
    var imgStyle = {};
    var divStyle = {};
    if (avatar_url.includes("no_avatar")) {
      displayInitial = name[0].toUpperCase();
      imgStyle.opacity = .5;
      divStyle.border = 0;
    }
    return (
      <div className="currentuser-avatar"
        style={divStyle}
        title={name}>
        <h2>{displayInitial}</h2>
        <img className="currentuser-avatar-img"
          src={this.state.user.avatar_url}
          style={imgStyle} />
      </div>
    );
  }
});

var UserAvatar = React.createClass({

  render: function () {
    var displayInitial;
    var name = this.props.user.name || this.props.user.email;
    var avatar_url = this.props.user.avatar_url || "";
    var imgStyle = {};
    var divStyle = {};
    if (avatar_url.includes("no_avatar")) {
      displayInitial = name[0].toUpperCase();
      imgStyle.opacity = .5;
      divStyle.border = 0;
    }
    return (
      <div className="user-avatar"
        style={divStyle}
        title={name}>
        <h2>{displayInitial}</h2>
        <img className="user-avatar-img"
          src={this.props.user.avatar_url}
          style={imgStyle} />
      </div>
    );
  }
});
