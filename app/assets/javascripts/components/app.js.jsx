var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({
  mixins: [ReactRouter.History],

  componentWillMount: function () {
    UserStore.addChangeListener(this._ensureSignedIn);
    AuthUtil.fetchCurrentUser();
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
    )
  }
});
