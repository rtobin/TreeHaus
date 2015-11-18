var authenticatedComponent = function (Component) {
  var wrappedComponent = React.createClass({
    statics: {
      onEnter(transition) {
        if (!LoginStore.isLoggedIn()) {
          transition.redirect('/login', {}, {'nextPath' : transition.path});
        }
      },


    },

    getInitialState: function () {
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.user,
        sessionToken: LoginStore.sessionToken
      };
    },

    componentDidMount: function () {
      this.changeListener = this._onChange.bind(this);
      LoginStore.addChangeListener(this.changeListener);
    },

    _onChange: function () {
      this.setState(this._getLoginState());
    },

    componentWillUnmount: function () {
      LoginStore.removeChangeListener(this.changeListener);
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
