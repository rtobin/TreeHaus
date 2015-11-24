(function (root) {
  var _projects = {};
  var CHANGE_EVENT = "change";

  var addProjects = function (projects) {
    $.extend(_projects, projects);
  };

  // var addTodos = function(projectID, todos) {
  //   var project = {projectID: todos};
  //   $.extend(_projects, project);
  // };
  //
  // var addSteps = function(projectID, todoID, steps) {
  //   var project = {projectID: {todoID : steps}};
  //   $.extend(_projects, project);
  // };

  var addProject = function (projectID, project) {
    _projects[projectID] = project;
  };

  var addTodo = function (projectID, todoID, todo) {
    _projects[projectID].todos[todoID] = todo;
  };

  var addStep = function (projectID, todoID, stepId, step) {
    _projects[projectID].todos[todoID].steps[stepID] = step;
  };

  var deleteProject = function (projectID) {
    delete _projects[projectID];
  };

  var deleteTodo = function (projectID, todoID) {
    delete _projects[projectID].todo[todoID];
  };

  var deleteStep = function (projectID, todoID, stepID) {
    delete _projects[projectID].todo[todoID].steps[stepID];
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
        // PROJECTS CRUD
        case ProjectConstants.PROJECTS_RECEIVED:
          addProjects(payload.projects);
          break;
        case ProjectConstants.PROJECT_CREATED:
          addProject(payload.projectID, payload.project);
          break;
        case ProjectConstants.PROJECT_UPDATED:
          addProject(payload.projectID, payload.project);
          ProjectStore.emitChange();
          break;
        case ProjectConstants.PROJECT_DESTROYED:
          deleteProject(payload.projectID);
          // ProjectStore.emitChange();
          break;

        // TODOS CRUD
        case TodoConstants.TODO_CREATED:
          addTodo(payload.projectID, payload.todoID, todo);
          break;
        case TodoConstants.TODO_UPDATED:
          addTodo(payload.projectID, payload.todoID, todo);
          ProjectStore.emitChange();
          break;
        case TodoConstants.TODO_DESTROYED:
          deleteTodo(payload.projectID, payload.todoID);
          // ProjectStore.emitChange();
          break;

        // STEPS CRUD
        case TodoConstants.STEP_CREATED:
          addStep(payload.projectID, payload.todoID, payload.stepID, step);
          break;
        case TodoConstants.STEP_UPDATED:
          addStep(payload.projectID, payload.todoID, payload.stepID, step);
          ProjectStore.emitChange();
          break;
        case TodoConstants.STEP_DESTROYED:
          deleteStep(payload.projectID, payload.todoID. payload.stepID);
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
