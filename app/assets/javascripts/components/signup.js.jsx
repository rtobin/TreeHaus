// Attempt and making 'fluxy' login/signup

var Signup = window.Signup = React.createClass ({

  getInitialState: function () {
      return {
        email: '',
        password: '',
        title: "Boss",
        organization_id: 1
      };
  },

  onEmailChange: function(event) {
    this.setState({email: event.target.value})
  },

  onPsswdChange: function(event) {
    this.setState({password: event.target.value})
  },

  signup: function (e) {
    e.preventDefault();
    AuthUtil.signup(this.state.email, this.state.password, this.state.extra)
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
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }

});
