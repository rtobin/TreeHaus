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
        var errorid = "new-project";
        UIActions.errorReport(JSON.parse(args[0].responseText), errorid);
      }
    );
  },

  updateProject: function (projectParams) {
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
        var errorid = "update-project";
        UIActions.errorReport(JSON.parse(args[0].responseText), errorid);
      }
    );
  },

  destroyProject: function (projectID) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/projects/' + projectID,
      data: {id: projectID},
      success: function () {
        ProjectActions.projectDestroyed(projectID);
      }
    });
  }
};
