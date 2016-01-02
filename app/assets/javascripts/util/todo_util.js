TodoUtil = {
  fetchTodo: function (todoID) {
    $.get(
      'api/todos/' + todoID,
      function (todo) {
        TodoActions.todoUpdated(todo.project_id, todo);
      }
    );
  },

  createTodo: function (todoParams) {
    $.post('api/todos',
      {todo: todoParams},
      function(todo) {
        TodoActions.todoCreated(todo.project_id, todo);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        var errorid = "new-todo";
        UIActions.errorReport(JSON.parse(args[0].responseText), errorid);
      }
    );
  },

  updateTodo: function (todoParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/todos/' + todoParams.id,
      data: {
        id: todoParams.id,
        todo: todoParams
      },
      success: function (todo) {
        TodoActions.todoUpdated(todo.project_id, todo);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        var errorid = "update-todo";
        UIActions.errorReport(JSON.parse(args[0].responseText), errorid);
      }
    );
  },

  destroyTodo: function (todoParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/todos/' + todoParams.id,
      data: {id: todoParams.id},
      success: function () {
        TodoActions.todoDestroyed(todoParams.project_id, todoParams.id);
      }
    });
  },

  createStep: function (stepParams) {
    $.post('api/steps',
      {
        step: stepParams.step,
        assignees: stepParams.assignees
      },
      function(step) {
        TodoActions.stepCreated(
          stepParams.projectID,
          stepParams.todoID,
          step);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        var errorid = "new-step";
        UIActions.errorReport(JSON.parse(args[0].responseText), errorid);
      }
    );
  },

  updateStep: function (stepParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/steps/' + stepParams.id,
      data: {
        id: stepParams.id,
        step: stepParams.step
      },
      success: function (step) {
        TodoActions.stepUpdated(
          stepParams.projectID,
          stepParams.todoID,
          step);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        var errorid = "update-step";
        UIActions.errorReport(JSON.parse(args[0].responseText), errorid);
      }
    );
  },

  destroyStep: function (stepParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/steps/' + stepParams.id,
      data: {id: stepParams.id},
      success: function () {
        TodoActions.stepDestroyed(
          stepParams.projectID,
          stepParams.todoID,
          stepParams.id);
      }
    });
  }
};
