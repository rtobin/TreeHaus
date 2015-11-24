ProjectActions = {
  projectsReceived: function (projects) {
    TodoActions.todosReceived(projects.todos);
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      projects: projects
    });
  },

  projectCreated: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_CREATED,
      project: project
    });
  },

  projectUpated: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_UPDATED,
      project: project
    });
  },

  projectDestroyed: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_DESTROYED,
      project: project
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
