(function (root) {
  var _projects = {};
  var CHANGE_EVENT = "change";

  var setProjects = function (projects) {
    Object.assign(_projects, projects);
  };

  var addProject = function (project) {
    _projects[project.id]= project;
  };

  var deleteProject = function (project) {
    delete _projects[project.id];
  };

  var ProjectStore = root.ProjectStore = $.extend({}, BaseStore, {
    // changed: function(){
    //   _handlers.forEach(function(cb){ cb(); });
    // },
    //
    // addChangedHandler: function(callback){
    //   _handlers.push(callback);
    // },
    //
    // removeChangedHandler: function(callback){
    //   _handlers.splice(_handlers.indexof(callback), 1);
    // },

    all: function(){
      return _projects;
    },

    find: function(id) {
      return _projects[id];
    },
    // projects received when project is fetched
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectConstants.PROJECTS_RECEIVED:
          setProjects(payload.projects);
          break;
        case ProjectConstants.PROJECT_CREATED:
          addProject(payload.project);
          break;
        case ProjectConstants.PROJECT_UPDATED:
          addProject(payload.project);
          ProjectStore.emitChange();
          break;
        case ProjectConstants.PROJECT_DESTROYED:
          deleteProject(payload.project);
          // ProjectStore.emitChange();
          break;
      }
    })
  });
})(this);

// case Constants.RECEIVE_USER_DATA:
//           addPosts(payload.posts);
//           break;
//
//         case Constants.POST_ADDED:
//           addPost(payload.post);
//           break;
//
//         case Constants.POST_UPDATED:
//           updatePost(payload.post);
//           root.PostStore.emitChange();
//           break;
//
//         case Constants.POST_DELETED:
//           deletePost(payload.post);
//           break;




// (function(root){
//   var _projects = {};
//   var CHANGE_EVENT = "change";
//
//   var setProjects = function (projects) {
//     _projects = projects;
//   };
//
//   var setCurrentProject = function (project) {
//     _currentProject = project;
//   };
//
//   var ProjectStore = root.ProjectStore = $.extend({}, BaseStore, {
//     currentProject: function () {
//       return _currentProject;
//     },
//
//     all: function(){
//       return _projects.slice(0);
//     },
//
//     addProjectsListChangeListener: function (callback) {
//       this.on(PROJECT_LIST_CHANGE_EVENT, callback);
//     },
//
//     removeProjectsListChangeListener: function (callback) {
//       this.removeListener(PROJECT_LIST_CHANGE_EVENT, callback);
//     },
//
//     addProjectDeleteChangeListener: function (callback) {
//       this.on(PROJECT_DELETE_EVENT, callback);
//     },
//
//     removeProjectDeleteChangeListener: function (callback) {
//       this.removeListener(PROJECT_DELETE_EVENT, callback);
//     },
//
//     dispatcherID: AppDispatcher.register(function(payload){
//       switch(payload.actionType){
//         case ProjectConstants.PROJECTS_RECEIVED:
//           setProjects(payload.projects);
//           ProjectStore.emit(PROJECT_LIST_CHANGE_EVENT);
//           break;
//         case ProjectConstants.CURRENT_PROJECT_RECEIVED:
//
//           setCurrentProject(payload.project);
//           ProjectStore.emit(CHANGE_EVENT);
//           break;
//         case ProjectConstants.PROJECT_DESTROYED:
//           setCurrentProject(null);
//           ProjectStore.emit(PROJECT_DELETE_EVENT);
//           // do I need another listener for deletion?
//           break;
//       }
//     })
//   });
// })(this);
