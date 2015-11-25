var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({
  mixins: [ReactRouter.History],

  // componentWillMount: function () {

  //   }
  // },

  componentWillMount: function () {
    AuthUtil.fetchCurrentUser();
    
    // UserStore.addChangeListener(this._ensureSignedIn);
    this._ensureSignedIn();
  },

  _ensureSignedIn: function () {
    if (!UserStore.isSignedIn() || UserStore.currentUser().id !== parseInt(this.history.nextState.params.userID)) {
      // this.history.replaceState({
      //   nextPathname: nextStatePath
      // }, '/signin');
      this.history.pushState(null, "/signin");

    }

    this.setState({currentUser: UserStore.currentUser()});
  },


  goToSignIn: function () {
    if (!UserStore.isSignedIn()) {
      return <Signin />;
    }
  },


  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
