LoginActions = {
  loginUser: function (user) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      user: user
    });
  },

  logoutUser: function () {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER
    });
  },

  errorReport: function (errors) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.AUTH_ERROR,
      errors: errors
    });
  }
};
