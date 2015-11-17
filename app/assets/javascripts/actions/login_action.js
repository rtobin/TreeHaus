LoginActions = {
  loginUser: function (jwt) {
    var savedJwt = localStorage.getItem('jwt');

    // go to Home Page once user is logged in
    RouteContainer.get().transitionTo('/');
    // We save the JWT in localStorage to keep the user authenticated. We’ll learn more about this later.
    // localStorage.setItem(‘jwt’, jwt);
    // Send the action to all stores through the Dispatcher
    AppDispatcher.dispatch({
      actionType: LoginConstants.LOGIN_USER,
      jwt: jwt
    });
  },
};
