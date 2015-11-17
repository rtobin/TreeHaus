// Attempt and making 'fluxy' login/signup



var Login = window.Login = React.createClass ({
  getInitialState: function () {
      return {
        user: '',
        password: ''
      };
  },

  login = function (e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function (err) {
        alert("Login error!")
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
                valueLink={this.linkState('user')}
                className="form-control"
                placeholder="email" />
            </label>
          </div>
          <div className="form-group">
            <label>Password
              <input
                type="text"
                valueLink={this.linkState('password')}
                className="form-control"
                ref="password"
                placeholder="password" />
            </label>
          </div>
          <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }

})

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
