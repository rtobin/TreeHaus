// Attempt and making 'fluxy' login/signup

var Login = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
      return {
        email: '',
        password: ''
      };
  },

  componentWillMount: function () {
    UserStore.addChangeListener(this.redirectAfterLogin);
  },

  componentDidMount: function () {
    this.checkIfLoggedIn();
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this.redirectAfterLogin);
  },

  redirectAfterLogin: function () {
    var location = this.props;
    if (location.state && location.state.nextPathname) {
      this.history.replaceState(null, location.state.nextPathname);
    } else {
      this.history.pushState(null, "/projects");
    }
  },

  onEmailChange: function(event) {
    this.setState({email: event.target.value});
  },

  onPsswdChange: function(event) {
    this.setState({password: event.target.value});
  },

  loginCallbackAction: function (user) {
    LoginActions.loginUser(user);
  },

  login: function (e) {
    e.preventDefault();
    AuthUtil.login(this.state, this.loginCallbackAction);
  },

  guestLogin: function (e) {
    var guest = {
      email: "jane@example.com",
      password: "Password0"
    };
    this.setState(guest);
    var that = this;
    // setTimeout(AuthUtil.login(guest, that.loginCallback), 500);
    AuthUtil.login(guest, this.loginCallbackAction);
  },

  checkIfLoggedIn: function () {
    if (UserStore.isLoggedIn()) {
      var str = "You are currently logged in with the email: \"";
      str += UserStore.getUser().email;
      str+= "\n Do you wish to log out?";
      var r = confirm(str);
      if (r === true) {
          x = "You pressed OK!";
          LoginActions.logoutUser();
      } else {
          x = "You pressed Cancel!";
          UserStore.emitChange();
      }
      console.log(x);
    }
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <Errors />
        <form onSubmit={this.login}>
          <div className="form-group">
            <label>Email
              <input
                type="text"
                value={this.state.email}
                className="form-control"
                ref="email"
                placeholder="email"
                onChange={this.onEmailChange}/>
            </label>
          </div>
          <div className="form-group">
            <label>Password
              <input
                type="password"
                value={this.state.password}
                className="form-control"
                ref="password"
                placeholder="password"
                onChange={this.onPsswdChange}/>
            </label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
          <button onClick={this.guestLogin}>Guest</button>
        </form>
        <p>
          don't have an account?
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }

});
