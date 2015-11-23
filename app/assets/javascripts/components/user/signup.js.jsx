// Attempt and making 'fluxy' signin/signup

var Signup = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
      return {
        email: '',
        password: '',
        title: "Boss",
        organization_id: 1
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
      debugger
      this.history.replaceState(null, location.state.nextPathname);
    } else {
      this.history.pushState(null, "projects");
    }
  },

  onEmailChange: function(event) {
    this.setState({email: event.target.value});
  },

  onPsswdChange: function(event) {
    this.setState({password: event.target.value});
  },

  checkIfSignedIn: function () {
    if (UserStore.isSignedIn()) {
      var str = "You are currently signged in with the email: \"";
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

  signup: function (e) {
    e.preventDefault();
    AuthUtil.signup(this.state);
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="session signup jumbotron center-block">
        <h1>Signup</h1>
        <Errors />
        <form onSubmit={this.signup}>
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
        </form>
        <p>
          already have an account?
          <Link to="/signin">Signin</Link>
        </p>
      </div>
    );
  }

});