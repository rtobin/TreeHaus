LoginActions = {
  loginUser: function (user) {
    var savedSessionToken = localStorage.getItem('sessionToken');

    // Send the action to all stores through the Dispatcher
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      user: user
    });

    if (savedSessionToken !== user.sessionToken) {
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      // go to Home Page once user is logged in
      RouteContainer.get().transitionTo(nextPath);
      // We save the JWT in localStorage to keep the user authenticated.
      localStorage.setItem(‘sessionToken’, userData.sessionToken);
    }
  },

  logoutUser: function () {
    RouteContainer.get().transitionTo('/login');
    localStorage.removeItem('sessionToken');
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER
    });
  }
};
