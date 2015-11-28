UIActions = {
  errorReport: function (errors) {
    AppDispatcher.dispatch({
      actionType: UIConstants.RECEIVED_ERROR,
      errors: errors
    });
  }
};
