var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({
  mixins: [ReactRouter.History],

  componentDidMount: function () {
    UserStore.addChangeListener(this._ensureSignedIn);
    debugger
    if (UserStore.isSignedIn()) {
      this.history.pushState(null, userID + "/projects");
    } else {
      this.history.pushState(null, "/signin");

    }
    // AuthUtil.fetchCurrentUser();
  },

   _ensureSignedIn: function () {
     if (!UserStore.isSignedIn()) {
       this.history.pushState(null, "/signin");
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
