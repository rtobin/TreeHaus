SigninBody = React.createClass({
  render: function () {
    var now = new Date();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
      <article className="session-body">
        <header className="session-info centered">
          <h3>
            {"Happy "}
            <time dateTime={now} data-local="time" data-format="%A" title={now} data-localized="true">{dayNames[now.getDay()]}</time>
            !
          </h3>
          <p>
            Just enter your email address and password
            we’ll get you right into Treehaus.
          </p>
        </header>
        <SigninForm />
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
