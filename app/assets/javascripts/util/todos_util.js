TodoUtil = {
  createTodo: function (todoParams) {
    $.post('api/todos',
      {
        id: todoParams.id,
        todo: todoParams.todo
      },
      function(todo) {
        TodoActions.todoCreated(todoParams.projectID, todoParams.id, todo);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  updateTodo: function (todoParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/todos',
      data: {
        id: todoParams.id,
        todo: todoParams.todo
      },
      success: function (todo) {
        TodoActions.todoUpdated(todoParams.projectID, todoParams.id, todo);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  destroyTodo: function (todoParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/todos',
      data: {id: todoParams.id},
      success: function () {
        TodoActions.todoDestroyed(todoParams.projectID, todoParams.id);
      }
    });
  },

  createStep: function (stepParams) {
    $.post('api/steps',
      {
        id: stepParams.id,
        step: stepParams.step
      },
      function(step) {
        StepActions.stepCreated(
          stepParams.projectID,
          stepParams.todoID,
          stepParams.id,
          step);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  updateStep: function (stepParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/steps',
      data: {
        id: stepParams.id,
        step: stepParams.step
      },
      success: function (step) {
        StepActions.stepUpdated(
          stepParams.projectID,
          stepParams.todoID,
          stepParams.id,
          step);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  destroyStep: function (stepParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/steps',
      data: {id: stepParams.id},
      success: function () {
        StepActions.stepDestroyed(
          stepParams.projectID,
          stepParams.todoID,
          stepParams.id);
      }
    });
  }
};
