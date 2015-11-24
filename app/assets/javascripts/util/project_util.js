ProjectUtil = {
  // projectParams example: {}
  createProject: function (projectParams) {
    $.post('api/projects',
      projectParams,
      function(project) {
        ProjectActions.projectCreated(projectParams.id, project);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UserActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  updateProject: function (projectParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/projects',
      data: projectParams,
      success: function (project) {
        ProjectActions.projectUpdated(projectParams.id, project);
      }
    });
  },

  destroyProject: function (projectParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/projects',
      data: projectParams,
      success: function () {
        ProjectActions.projectDestroyed(projectParams.id);
      }
    });
  }
};
