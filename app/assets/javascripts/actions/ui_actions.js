UIActions = {
  errorReport: function (errors) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.AUTH_ERROR,
      errors: errors
    });
  }
};
