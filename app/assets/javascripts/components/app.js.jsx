'use strict';

var App = React.createClass({


  getInitialState: function () {
      return this._getLoginState();
  },

  _getLoginState: function () {
    return  { loggedIn: UserStore.isLoggedIn() };
  },

  _onChange: function () {
    this.setState(this._getLoginState());
  },

  componentDidMount: function () {
    this.changeListener = this._onChange;
    UserStore.addChangeListener(this.changeListener);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this.changeListener);
  },

  render: function () {
    return (
      <div className="container">
        {this.props.children}

      </div>
    );
  },

  headerItems: function () {
    var Link = ReactRouter.Link;
    if (!this.state.LoggedIn) {
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
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
          <li>
            <a href="" onClick={this.logout}>Logout</a>
          </li>
        </ul>
        )
      }
    }
});
