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

  signUp: function (e) {
    e.preventDefault();
    Auth.signup(this.state.email, this.state.password, this.state.extra)
      .catch(function (err) {
        alert("Signup error!");
      });
  },

  render: function () {
    return (
      <div className="signup jumbotron center-block">
        <h1>Signup</h1>
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
