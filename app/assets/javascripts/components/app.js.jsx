var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({
  mixins: [ReactRouter.History],

  // componentWillMount: function () {
  //   if (!UserStore.isSignedIn() || UserStore.currentUser().id !== parseInt(nextState.params.userID)) {
  //     replaceState({
  //       nextPathname: nextState.location.pathname
  //     }, '/signin');
  //   }
  // },

  componentWillMount: function () {
    UserStore.addChangeListener(this._ensureSignedIn);
    AuthUtil.fetchCurrentUser();
  },

  _ensureSignedIn: function () {
    if (!UserStore.isSignedIn()) {
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
        {this.goToSignIn()}
        {this.props.children}
      </div>
    );
  }
});
