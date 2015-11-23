(function(root){

  // projects is an array of objects {id: project.id, title: project.title}
  var _projects = [];
  var _currentProject = null;
  var CHANGE_EVENT = "change";
  var PROJECT_LIST_CHANGE_EVENT = "projectListChange"
  var PROJECT_DELETE_EVENT = "projectDeleteEvent"

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

    addProjectsListChangeListener: function (callback) {
      this.on(PROJECT_LIST_CHANGE_EVENT, callback);
    },

    removeProjectsListChangeListener: function (callback) {
      this.removeListener(PROJECT_LIST_CHANGE_EVENT, callback);
    },

    addProjectDeleteChangeListener: function (callback) {
      this.on(PROJECT_DELETE_EVENT, callback);
    },

    removeProjectDeleteChangeListener: function (callback) {
      this.removeListener(PROJECT_DELETE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectConstants.PROJECTS_RECEIVED:
          setProjects(payload.projects);
          ProjectStore.emit(PROJECT_LIST_CHANGE_EVENT);
          break;
        case ProjectConstants.CURRENT_PROJECT_RECEIVED:
          setCurrentProject(payload.project);
          ProjectStore.emit(CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_DESTROYED:
          setCurrentProject(null);
          ProjectStore.emit(PROJECT_DELETE_EVENT);
          // do I need another listener for deletion?
          break;
      };
    })
  });
})(this);
