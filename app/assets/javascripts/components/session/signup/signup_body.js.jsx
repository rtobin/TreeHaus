SignupBody = React.createClass({
  render: function () {
    var now = new Date();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
      <article className="signin-header">
        <header className="centered">
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
