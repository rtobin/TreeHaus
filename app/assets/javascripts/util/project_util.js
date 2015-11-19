ProjectUtil = {
  fetchProjects: function(){
    var filter = FilterParamsStore.params();
    $.get('api/projects', filter, function(projects){
      ProjectActions.receiveProjects(projects);
    });
  },

  createProject: function(data){
    $.post('api/projects', { project: data }, function(project) {
      ApiActions.receiveSingleProject(project);
    });
  },
};
