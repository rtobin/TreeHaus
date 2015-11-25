ProjectActions = {
  projectsReceived: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  // currentProjectReceived: function (project) {
  //   AppDispatcher.dispatch({
  //     actionType: ProjectConstants.CURRENT_PROJECT_RECEIVED,
  //     project: project
  //   });
  // },

  projectCreated: function (projectID, project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_CREATED,
      project: project,
      projectID: projectID
    });
  },

  projectUpated: function (projectID, project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_UPDATED,
      project: project,
      projectID: projectID
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
