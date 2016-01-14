// Attempt and making 'fluxy' signin/signup

var SigninForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
      return {
        email: '',
        password: ''
      };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._checkIfSignedIn);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this._checkIfSignedIn);
  },

  _redirectAfterSignin: function () {
    var location = this.props;
    var userID = UserStore.currentUser().id;
    if (location.state && location.state.nextPathname) {
      this.history.replaceState(null, location.state.nextPathname);
    } else {
      this.history.pushState(null, userID + "/projects");
    }
  },

  _signin: function (e) {
    e.preventDefault();
    SessionUtil.signin(this.state);
  },

  _guestSignin: function (e) {
    var guest = {
      email: "guest@treehaus.space",
      password: "Password1"
    };
    this.setState(guest);
    var that = this;
    SessionUtil.signin(guest);
  },

  _checkIfSignedIn: function () {
    if (UserStore.isSignedIn()) {
      this._redirectAfterSignin();
    }
  },

  _onFormChange: function(e) {
    var target = e.target;
    var attr = target.dataset.attr;
    this.state[attr] = target.value;
    this.forceUpdate();
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <section className="session signin centered">
        <Errors errorid="signin-expanded" />
        <form className="session-form" onSubmit={this._signin}>
          <div className="form-group">
            <input
              type="text"
              value={this.state.email}
              data-attr="email"
              className="session-field"
              placeholder="Email address"
              title="email"
              onChange={this._onFormChange}
              autofocus/>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={this.state.password}
              data-attr="password"
              className="session-field"
              placeholder="Password"
              title="password"
              onChange={this._onFormChange}/>
          </div>
          <button type="submit" className="session-btn btn-default">Sign in</button>
        </form>
      </section>
    );
  }
});
