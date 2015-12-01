TodoUtil = {
  createTodo: function (todoParams) {
    $.post('api/todos',
      {todo: todoParams},
      function(todo) {
        TodoActions.todoCreated(todo.project_id, todo);
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
        UIActions.errorReport(JSON.parse(args[0].responseText));
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
      {step: stepParams.step},
      function(step) {
        StepActions.stepCreated(
          stepParams.projectID,
          stepParams.todoID,
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
      url: 'api/steps/' + stepParams.id,
      data: {
        id: stepParams.id,
        step: stepParams.step
      },
      success: function (step) {
        StepActions.stepUpdated(
          stepParams.projectID,
          stepParams.todoID,
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
      url: 'api/steps/' + stepParams.id,
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
