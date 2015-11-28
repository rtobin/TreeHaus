ProjectActions = {
  projectsReceived: function (projects) {
    debugger
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  projectCreated: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_CREATED,
      project: project
    });
  },

  projectUpdated: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_UPDATED,
      project: project
    });
  },

  projectDestroyed: function (projectID) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_DESTROYED,
      projectID: projectID
    });
  }


  // receiveProjects: function (projects) {
  //   AppDispatcher.dispatch({
  //     actionType: ProjectConstants.PROJECTS_RECEIVED,
  //     projects: projects
  //   });
  // },
  //
  // receiveSingleProject: function (project) {
  //   AppDispatcher.dispatch({
  //     actionType: ProjectConstants.CURRENT_PROJECT_RECEIVED,
  //     project: project
  //   });
  // },
  //
  // destroyProject: function (projectID) {
  //   AppDispatcher.dispatch({
  //     actionType: ProjectConstants.PROJECT_DESTROYED,
  //     projectID: projectID
  //   });
  // }
};
