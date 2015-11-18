var Logout = window.Logout = React.createClass ({
  componentDidMount: function () {
    AuthUtil.logout();
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="logout jumbotron center-block">
        <h3>You have been logged out.</h3>
        <Link to="/login">Login</Link>
        <Link to="/signup">Create New Account</Link>
      </div>
    );
  }
})
