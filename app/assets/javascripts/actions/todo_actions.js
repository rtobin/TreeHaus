TodoActions = {
  todoCreated: function (projectID, todoID, todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATED,
      todo: todo,
      todoID: todoID,
      projectID: projectID
    });
  },

  todoUpated: function (projectID, todoID, todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATED,
      todo: todo,
      todoID: todoID,
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

  stepCreated: function (projectID, todoID, stepID, step) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.STEP_CREATED,
      step: step,
      stepID: stepID,
      todoID: todoID,
      projectID: projectID
    });
  },

  stepUpated: function (projectID, todoID, stepID, step) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.STEP_UPDATED,
      step: step,
      stepID: stepID,
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
