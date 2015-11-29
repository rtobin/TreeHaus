SessionActions = {
  signinUser: function (user) {
    if (typeof user.projects !== "undefined") {
      ProjectActions.projectsReceived(user.projects);
    }
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNIN_USER,
      user: user
    });
  },

  signoutUser: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNOUT_USER
    });
  }
};
