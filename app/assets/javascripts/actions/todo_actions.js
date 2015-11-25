TodoActions = {
  todoCreated: function (projectID, todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATED,
      todo: todo,
      projectID: projectID
    });
  },

  todoUpated: function (projectID, todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATED,
      todo: todo,
      projectID: projectID
    });
  },

  todoDestroyed: function (projectID, todoID) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROYED,
      todoID: todoID,
      projectID: projectID
    });
  },

  stepCreated: function (projectID, todoID, step) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.STEP_CREATED,
      step: step,
      todoID: todoID,
      projectID: projectID
    });
  },

  stepUpated: function (projectID, todoID, step) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.STEP_UPDATED,
      step: step,
      todoID: todoID,
      projectID: projectID
    });
  },

  stepDestroyed: function (projectID, todoID, stepID) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.STEP_DESTROYED,
      stepID: stepID,
      todoID: todoID,
      projectID: projectID
    });
  }
};
