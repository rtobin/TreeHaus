// Attempt and making 'fluxy' login/signup
var History = ReactRouter.History
var Login = window.Login = React.createClass ({
  mixins: [ this.history ],

  getInitialState: function () {
      return {
        email: '',
        password: ''
      };
  },

  onEmailChange: function(event) {
    this.setState({email: event.target.value})
  },

  onPsswdChange: function(event) {
    this.setState({password: event.target.value})
  },

  login: function (e) {
    var email, password;
    e.preventDefault();
    email = this.refs.email.props.value;
    password = this.refs.password.props.value;
    AuthUtil.login(email, password)
  },

  guestLogin: function (e) {
    var guest = {
      email: "joe@example.com",
      password: "password99"
    };
    this.setState(guest)
    AuthUtil.login(guest.email, guest.password)
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
