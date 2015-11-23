ProjectUtil = {

  createProject: function (projectData) {
    $.post('api/projects', { project: projectData }, function(project) {
      ProjectActions.projectCreated(project);
    });
  },

  updateProject: function (projectData) {
    $.ajax ({
      type: 'PUT',
      url: 'api/projects',
      data: {id: projectData.id},
      success: function (project) {
        ProjectActions.projectUpdated(project);
      }
    });
  },

  destroyProject: function (projectData) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/projects',
      data: {id: projectData.id},
      success: function (porjectID) {
        ProjectActions.projectDestroyed(project);
      }
    });
  }
};
