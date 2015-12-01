(function (root) {
  var _projects = {};
  var _currentProject = {};
  var CHANGE_EVENT = "change";
  var CURRENT_PROJECT_CHANGE_EVENT = "currentProjectChange";
  var TODOS_CHANGE_EVENT = "todosChange";
  var STEPS_CHANGE_EVENT = "stepsChange";

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

  var addProject = function (project) {
    _projects[project.id] = project;
  };

  var addTodo = function (projectID, todo) {
    todo.id = todoID;
    _projects[projectID].todos[todo.id] = todo;
  };

  var addStep = function (projectID, todoID, step) {
    step.id = stepID;
    _projects[projectID].todos[todoID].steps[step.id] = step;
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
    currentProject: function () {
      return $.extend({}, _currentProject);
    },

    setCurrentProject: function (project) {
      _currentProject = project;
    },

    all: function(){
      return $.extend({}, _projects);
    },

    find: function(id) {
      return _projects[id];
    },

    addCurrentProjectChangeListener: function (callback) {
      this.on(CURRENT_PROJECT_CHANGE_EVENT, callback);
    },

    removeCurrentProjectChangeListener: function (callback) {
      this.removeListener(CURRENT_PROJECT_CHANGE_EVENT, callback);
    },

    addTodosChangeListener: function (callback) {
      this.on(TODOS_CHANGE_EVENT, callback);
    },

    removeTodosChangeListener: function (callback) {
      this.removeListener(TODOS_CHANGE_EVENT, callback);
    },

    // projects received when user is fetched
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        // PROJECTS CRUD
        case ProjectConstants.PROJECTS_RECEIVED:
          addProjects(payload.projects);
          ProjectStore.emitChange();
          break;
        case ProjectConstants.PROJECT_CREATED:
          addProject(payload.project);
          ProjectStore.setCurrentProject(payload.project);
          ProjectStore.emit(CURRENT_PROJECT_CHANGE_EVENT);
          ProjectStore.emitChange();
          break;
        case ProjectConstants.PROJECT_UPDATED:
          addProject(payload.project);
          ProjectStore.emitChange();
          ProjectStore.emit(CURRENT_PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_DESTROYED:
          deleteProject(payload.id);
          ProjectStore.emitChange();
          break;
        case ProjectConstants.CURRENT_PROJECT_RECEIVED:
          ProjectStore.setCurrentProject(payload.project);
          ProjectStore.emit(CURRENT_PROJECT_CHANGE_EVENT);
          break;

        // TODOS CRUD
        case TodoConstants.TODO_CREATED:
          addTodo(payload.projectID, todo);
          ProjectStore.emit(TODOS_CHANGE_EVENT);
          break;
        case TodoConstants.TODO_UPDATED:
          addTodo(payload.projectID, todo);
          ProjectStore.emit(TODOS_CHANGE_EVENT);
          break;
        case TodoConstants.TODO_DESTROYED:
          deleteTodo(payload.projectID, payload.todoID);
          ProjectStore.emit(TODOS_CHANGE_EVENT);
          break;

        // STEPS CRUD
        case TodoConstants.STEP_CREATED:
          addStep(payload.projectID, payload.todoID, step);
          ProjectStore.emit(STEPS_CHANGE_EVENT);
          break;
        case TodoConstants.STEP_UPDATED:
          addStep(payload.projectID, payload.todoID, step);
          ProjectStore.emit(STEPS_CHANGE_EVENT);
          break;
        case TodoConstants.STEP_DESTROYED:
          deleteStep(payload.projectID, payload.todoID. payload.stepID);
          ProjectStore.emit(STEPS_CHANGE_EVENT);
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
