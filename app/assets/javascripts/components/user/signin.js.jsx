// Attempt and making 'fluxy' signin/signup

var Signin = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
      return {
        email: '',
        password: ''
      };
  },

  componentWillMount: function () {
    UserStore.addChangeListener(this.redirectAfterSignin);
  },

  componentDidMount: function () {
    this.checkIfSignedIn();
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this.redirectAfterSignin);
  },

  redirectAfterSignin: function () {
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

  signin: function (e) {
    e.preventDefault();
    AuthUtil.signin(this.state);
  },

  guestSignin: function (e) {
    var guest = {
      email: "jane@example.com",
      password: "Password0"
    };
    this.setState(guest);
    var that = this;
    // setTimeout(AuthUtil.signin(guest, that.signinCallback), 500);
    AuthUtil.signin(guest, this.signinCallbackAction);
  },

  checkIfSignedIn: function () {
    if (UserStore.isSignedIn()) {
      var str = "You are currently Signed in with the email: \"";
      str += UserStore.getUser().email;
      str+= "\n Do you wish to sign out?";
      var r = confirm(str);
      if (r === true) {
          x = "You pressed OK!";
          UserActions.signoutUser();
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
      <div className="signin jumbotron center-block">
        <h1>Signin</h1>
        <Errors />
        <form onSubmit={this.signin}>
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
          <button onClick={this.guestSignin}>Guest</button>
        </form>
        <p>
          don't have an account?
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }

});
