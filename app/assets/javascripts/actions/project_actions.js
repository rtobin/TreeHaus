ProjectActions = {
  receiveProjects: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveSingleProject: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      projects: project
    });
  },
};
