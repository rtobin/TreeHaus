// Attempt and making 'fluxy' signin/signup

var SignupForm = React.createClass ({
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

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this.redirectAfterSignin);
  },

  redirectAfterSignin: function () {
    var location = this.props;
    if (location.state && location.state.nextPathname) {
      this.history.replaceState(null, location.state.nextPathname);
    } else {
      this.history.pushState(null, "projects");
    }
  },

  signup: function (e) {
    e.preventDefault();
    SessionUtil.signup(this.state);
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
      <div className="session signup jumbotron center-block">
        <h1>Signup</h1>
        <Errors />
        <form onSubmit={this.signup}>
          <div className="form-group">
            <label>Email
              <input
                type="text"
                value={this.state.email}
                data-attr="email"
                className="form-control"
                placeholder="email"
                onChange={this._onFormChange}/>
            </label>
          </div>
          <div className="form-group">
            <label>Password
              <input
                type="password"
                value={this.state.password}
                data-attr="password"
                className="form-control"
                placeholder="password"
                onChange={this._onFormChange}/>
            </label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});
