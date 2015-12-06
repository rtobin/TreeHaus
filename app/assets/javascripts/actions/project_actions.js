ProjectActions = {
  projectsReceived: function (projects) {
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
  },

  projectReceived: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
  }
};
