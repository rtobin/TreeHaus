// Attempt and making 'fluxy' login/signup



var Signup = window.Signup = React.createClass ({
  getInitialState: function () {
      return {
        user: '',
        password: '',
        extra: '',
        isNewbie: true
      };
  },

  signUp: function (e) {
    e.preventDefault();
    Auth.signup(this.state.user, this.state.password, this.state.extra)
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
          <div className="form-group">
            <label>Extra
              <input
                type="text"
                valueLink={this.linkState('extra')}
                className="form-control"
                ref="password"
                placeholder="Some extra information" />
            </label>
          </div>
          <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }

});

// ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
