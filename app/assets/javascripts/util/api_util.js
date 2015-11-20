ApiUtil = {
  fetchProjects: function(){
    $.get('api/projects', {}, function(projects){
      ProjectActions.receiveProjects(projects);
    });
  },

  fetchSingleProject: function(){
    $.get('api/projects', {}, function(projects){
      ProjectActions.receiveSingleProject(project);
    });
  },

  createProject: function(data){
    $.post('api/projects', { project: data }, function(project) {
      ApiActions.receiveSingleProject(project);
    });
  },
};
