TodoActions = {
  todoCreated: function (todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATED,
      todo: todo
    });
  },

  todoUpated: function (todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATED,
      todo: todo
    });
  },

  todoDestroyed: function (todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROYED,
      todo: todo
    });
  }
};
