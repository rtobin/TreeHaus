ProjectUtil = {
  fetchProject: function (projectID) {
    $.get(
      'api/projects/' + projectID,
      function (project) {
        ProjectActions.projectReceived(project);
      }
    );
  },

  // projectParams example: {}
  createProject: function (projectParams) {
    debugger
    $.post('api/projects',
      {
        project: projectParams,
        emails: projectParams.memberEmails
      },
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
    debugger
    $.ajax ({
      type: 'PATCH',
      url: 'api/projects/' + projectParams.id,
      data: {
        project: projectParams,
        id: projectParams.id,
        emails: projectParams.memberEmails
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
