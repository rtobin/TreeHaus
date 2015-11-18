// Attempt and making 'fluxy' login/signup




var Login = window.Login = React.createClass ({
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
    e.preventDefault();
    Auth.login(this.state.email, this.state.password)
      .catch(function (err) {
        alert("Login error!");
      });
  },

  render: function () {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Email
              <input
                type="text"
                value={this.state.email}
                className="form-control"
                placeholder="email"
                onChange={this.onEmailChange}/>
            </label>
          </div>
          <div className="form-group">
            <label>Password
              <input
                type="text"
                value={this.state.password}
                className="form-control"
                ref="password"
                placeholder="password"
                onChange={this.onPsswdChange}/>
            </label>

          </div>
          <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }

});
