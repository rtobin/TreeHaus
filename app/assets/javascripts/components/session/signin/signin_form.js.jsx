// Attempt and making 'fluxy' signin/signup

var SigninForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
      return {
        email: '',
        password: ''
      };
  },

  componentWillMount: function () {
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

  _signin: function (e) {
    e.preventDefault();
    SessionUtil.signin(this.state);
  },

  _guestSignin: function (e) {
    var guest = {
      email: "ryan@treehaus.com",
      password: "Password1"
    };
    this.setState(guest);
    var that = this;
    SessionUtil.signin(guest);
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
      <section className="signin jumbotron center-block">
        <h1>Signin</h1>
        <Errors />
        <form onSubmit={this.signin}>
          <div className="form-group">
            <label>Email:
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
            <label>Password:
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
          <button onClick={this._guestSignin}>Guest</button>
        </form>
      </section>
    );
  }
});
