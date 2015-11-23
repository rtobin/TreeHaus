ProjectActions = {
  receiveProjects: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveSingleProject: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.CURRENT_PROJECT_RECEIVED,
      project: project
    });
  },

  destroyProject: function (projectID) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_DESTROYED,
      projectID: projectID
    });
  }
};
