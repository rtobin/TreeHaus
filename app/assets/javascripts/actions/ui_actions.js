UIActions = {
  errorReport: function (errors, errorid) {
    AppDispatcher.dispatch({
      actionType: UIConstants.RECEIVED_ERROR,
      errors: errors,
      errorid: errorid
    });
  }
};
