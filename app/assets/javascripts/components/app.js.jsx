var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({
  mixins: [ReactRouter.History],

  componentWillMount: function () {
    UserStore.addChangeListener(this._ensureSignedIn);
    SessionUtil.fetchCurrentUser();
  },

  _ensureSignedIn: function () {
    if (!UserStore.isSignedIn()) {
      this.history.pushState(null, "/signin");
    }
  },

  render: function () {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});
