(function(root){

  // projects is an array of objects {id: project.id, title: project.title}
  var _projects = [];
  var CHANGE_EVENT = "change";

  var resetProjects = function (projects) {
    _projects = projects;
  };

  var ProjectStore = root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _projects.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectConstants.PROJECTS_RECEIVED:
          var result = resetBenches(payload.benches);
          ProjectStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
