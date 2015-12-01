SignupBody = React.createClass({
  mixins: [ReactRouter.History],

  _redirectToProjectsHome: function () {
    this.history.pushState(null, this.props.currentUser().id + "/projects");
  },

  _staySignedIn: function () {
    if (UserStore.isSignedIn()) {
      var username = this.props.currentUser.name || this.props.currentUser.email;
      return (
        <div className="stay-signedin centered">
          <h4 className="break">
            <span>or</span>
          </h4>
          <p>
            You are currently signed in as
            <br/>
            <strong>{username}</strong>.
            <br/>
            Would you like to stay signed in?
          </p>
          <button
            className="session-btn btn-default stay-signedin-btn"
            onClick={this._redirectToProjectsHome}>
            Stay signed in
          </button>
        </div>
      );
    }
  },

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
        {this._staySignedIn()}
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
