SignupBody = React.createClass({
  render: function () {
    return (
      <article className="session-body">
        <header className="session-info centered">
          <h3>
            Begin your Treehaus here!
          </h3>
          <p>
            Let's get you started with your own account. Sign up with your email address:
          </p>
        </header>
        <SignupForm />
        <footer className="centered">
          <h4 className="break">
            <span>or</span>
          </h4>
          <div>Google signup</div>
        </footer>
      </article>
    );
  }
});
