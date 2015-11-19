ProjectActions = {
  receiveProjects: function (projects) {
    // var savedSessionToken = localStorage.getItem('sessionToken');
    // Send the action to all stores through the Dispatcher
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  // logoutUser: function () {
  //   // RouteContainer.get().transitionTo('/login');
  //   // localStorage.removeItem('sessionToken');
  //   AppDispatcher.dispatch({
  //     actionType: AuthConstants.LOGOUT_USER
  //   });
  // },
  //
  // errorReport: function (errors) {
  //   AppDispatcher.dispatch({
  //     actionType: AuthConstants.AUTH_ERROR,
  //     errors: errors
  //   });
  // }
};
