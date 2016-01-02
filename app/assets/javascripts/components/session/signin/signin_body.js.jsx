SigninBody = React.createClass({
  mixins: [ReactRouter.History],

  _redirectToProjectsHome: function () {
    this.history.pushState(null, this.props.currentUser.id + "/projects");
  },

  _siginGuest: function () {
    var guest = {
      email: "guest@treehaus.com",
      password: "Password1"
    };
    this.setState(guest);
    var that = this;
    SessionUtil.signin(guest);
  },

  // _handleGoogleSignin: function (){
  //   auth2.grantOfflineAccess({'redirect_uri': 'postmessage'}).then(this._signInCallback);
  // },

  // _signInCallback: function (authResult) {
  //   if (authResult['code']) {
  //
  //     // Hide the sign-in button now that the user is authorized, for example:
  //     // $('#signinButton').attr('style', 'display: none');
  //
  //     // Send the code to the server
  //     $.ajax({
  //       type: 'POST',
  //       url: 'http://example.com/storeauthcode',
  //       contentType: 'application/octet-stream; charset=utf-8',
  //       success: function(result) {
  //         // Handle or verify the server response.
  //       },
  //       processData: false,
  //       data: authResult['code']
  //     });
  //   } else {
  //     // There was an error.
  //   }
  // }

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
            Just enter your email address and password and
            we’ll get you right into Treehaus.
          </p>
        </header>
        <SigninForm pathname={this.props.pathname}/>
        {this._staySignedIn()}
        <footer className="centered">
          <div className="guest-signedin centered">
            <h4 className="break">
              <span>or</span>
            </h4>
            <button
              className="session-btn btn-default guest-signedin-btn"
              onClick={this._siginGuest}>
              Guest
            </button>
          </div>

          <h4 className="break">
            <span>or</span>
          </h4>
          <a id="google-signin-button" href="/users/auth/google_oauth2">
            Sign in with Google
          </a>
        </footer>
      </article>
    );
  }
});
