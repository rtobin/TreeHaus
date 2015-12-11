UserActions = {
  updateUser: function (userData) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVED_USER_DATA,
      userData: userData
    });
  }
};
