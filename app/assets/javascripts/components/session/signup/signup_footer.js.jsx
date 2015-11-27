SignupFooter = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    return (
      <footer className="signup-footer">
        <p>
          <small>
            <strong>Already have an account? </strong>
            <Link to="/signin">Sign in</Link>
          </small>
        </p>
      </footer>
    );
  }
});
