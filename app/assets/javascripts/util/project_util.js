ProjectUtil = {
  // projectParams example: {}
  createProject: function (projectParams) {
    $.post('api/projects',
      {project: projectParams},
      function(project) {
        ProjectActions.projectCreated(project);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  updateProject: function (projectParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/projects/' + projectParams.id,
      data: {
        project: projectParams,
        id: projectParams.id
      },
      success: function (project) {
        ProjectActions.projectUpdated(project);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  destroyProject: function (projectParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/projects/' + projectParams.id,
      data: projectParams,
      success: function () {
        ProjectActions.projectDestroyed(projectParams.id);
      }
    });
  }
};
