TodoUtil = {

  createTodo: function (todoData) {
    $.post('api/todos', { todo: todoData }, function(todo) {
      TodoActions.todoCreated(todo);
    });
  },

  updateTodo: function (todoData) {
    $.ajax ({
      type: 'PUT',
      url: 'api/todos',
      data: {id: todoData.id},
      success: function (todo) {
        TodoActions.todoUpdated(todo);
      }
    });
  },

  destroyTodo: function (todoData) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/todos',
      data: {id: todoData.id},
      success: function (porjectID) {
        TodoActions.todoDestroyed(todo);
      }
    });
  }
};
