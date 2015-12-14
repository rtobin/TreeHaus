// Attempt and making 'fluxy' signin/signup

var SignupForm = React.createClass ({
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

  _signup: function (e) {
    e.preventDefault();
    SessionUtil.signup(this.state);
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
      <section className="session signup centered">
        <Errors />
        <form className="session-form" onSubmit={this._signup}>
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
          <button type="submit" className="session-btn btn-default">Sign up</button>
        </form>
      </section>
    );
  }
});
