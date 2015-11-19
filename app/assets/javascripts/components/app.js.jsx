var App = React.createClass({
  mixins: [ReactRouter.History],


  getInitialState: function () {
      return { isLoggedIn: this._getLoginState() };
  },

  _getLoginState: function () {
    return  UserStore.isLoggedIn();
  },

  _onChange: function () {
    // redirect to login
    this.setState({isLoggedIn: this._getLoginState()});
  },

  componentDidMount: function () {
    this.changeListener = this._onChange;
    UserStore.addChangeListener(this.changeListener);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this.changeListener);
  },


  render: function () {
    debugger
    return (
      <div className="container">
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  },

  headerItems: function () {
    var Link = ReactRouter.Link;
    debugger;
    if (!UserStore.isLoggedIn()) {
      return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
      </ul>)
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="stuff">Stuff</Link>
          </li>
          <li>
            <a href="" onClick={AuthUtil.logout()}>Logout</a>
          </li>
        </ul>
        )
      }
    }
});
