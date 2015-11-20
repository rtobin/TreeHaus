(function(root){

  // projects is an array of objects {id: project.id, title: project.title}
  var _projects = [];
  var _currentProject = null;
  var CHANGE_EVENT = "change";

  var setProjects = function (projects) {
    _projects = projects;
  };

  var setCurrentProject = function (project) {
    _currentProject = project;
  };

  var ProjectStore = root.ProjectStore = $.extend({}, BaseStore, {
    currentProject: function () {
      return _currentProject;
    },

    all: function(){
      return _projects.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectConstants.PROJECTS_RECEIVED:
          var result = setProjects(payload.benches);
          ProjectStore.emit(CHANGE_EVENT);
          break;
        case ProjectConstants.CURRENT_PROJECT_RECEIVED:
          var result = setCurrentProject(payload.bench);
          ProjectStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
