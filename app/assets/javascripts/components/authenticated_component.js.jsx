var authenticatedComponent = function (Component) {
  var wrappedComponent = React.createClass({
    statics: {
      onEnter(transition) {
        if (!UserStore.isLoggedIn()) {
          transition.redirect('/login', {}, {'nextPath' : transition.path});
        }
      },


    },

    getInitialState: function () {
      return {
        userLoggedIn: UserStore.isLoggedIn(),
        user: UserStore.user,
        // sessionToken: UserStore.sessionToken
      };
    },

    componentDidMount: function () {
      this.changeListener = this._onChange.bind(this);
      UserStore.addChangeListener(this.changeListener);
    },

    _onChange: function () {
      this.setState(this._getLoginState());
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.changeListener);
    },

    render: function () {
      return (
        <Component
          {...this.props}
          user={this.state.user}
          sessionToken={this.state.sessionToken}
          userLoggedIn={this.state.userLoggedIn} />
      );
    }
  });

  return wrappedComponent;

};
