var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({
  mixins: [ReactRouter.History],

  // componentWillMount: function () {

  //   }
  // },

  componentWillMount: function () {
    SessionUtil.fetchCurrentUser();
    UserStore.addChangeListener(this._ensureSignedIn);
  },

  _ensureSignedIn: function () {
    if (!UserStore.isSignedIn()) {
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
