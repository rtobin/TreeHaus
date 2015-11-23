ProjectUtil = {
  fetchProjects: function () {
    $.get('api/projects', {}, function(projects){
      ProjectActions.receiveProjects(projects);
    });
  },

  fetchSingleProject: function (projectID) {
    $.get('api/projects', {id: projectID}, function(projects){
      ProjectActions.receiveSingleProject(project);
    });
  },

  createProject: function (projectData) {
    $.post('api/projects', { project: projectData }, function(project) {
      ProjectActions.receiveSingleProject(project);
    });
  },

  updateProject: function (projectData) {
    $.ajax ({
      type: 'PUT',
      url: 'api/projects',
      data: {id: projectData.id},
      success: function (project) {
        ProjectActions.receiveSingleProject(project);
      }
    });
  },

  destroyProject: function (projectData) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/projects',
      data: {id: projectData.id},
      success: function (porjectID) {
        ProjectActions.projectDestroyed(projectID);
      }
    });
  }

};
