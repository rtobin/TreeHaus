SigninFooter = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    return (
      <footer className="signin-footer">
        <p>
          <small>
            <strong>Don't have an account? </strong>
            <Link to="/signup" className="session-switch">Sign up</Link>
          </small>
        </p>
      </footer>
    );
  }
});
