(function (root) {
  var _todos = {};
  var CHANGE_EVENT = "change";


  var setTodos = function (todos) {
    Object.assign(_todos, todos);
  };

  var addTodo = function (todo) {
    _todos[todo.id]= todo;
  };

  var deleteTodo = function (todo) {
    delete _todos[todo.id];
  };

  var TodoStore = root.TodoStore = {
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
      return _todos;
    },

    find: function(id) {
      return _todos[id];
    },
    // todos received when project is fetched
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectStore.CURRENT_PROJECT_RECEIVED:
          setTodos(payload.todos);
          break;
        case TodoConstants.TODO_CREATED:
          addTodo(payload.todo);
          break;
        case TodoConstants.TODO_UPDATED:
          addTodo(payload.todo);
          TodoStore.emitChange();
          break;
        case TodoConstants.TODO_DESTROYED:
          deleteTodo(payload.todo);
          // TodoStore.emitChange();
          break;
      }
    })
  };
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
