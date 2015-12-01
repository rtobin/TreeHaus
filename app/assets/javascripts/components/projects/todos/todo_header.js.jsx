var TodoHeader = React.createClass({
  render: function () {
    var todo = this.props.todo;
    var progress = todo.progress;
    return (
      <header className="todo-header" >
        {todo.title}
        <div className="progress">
          <span>{progress.done_count}/{progress.step_count}</span>
        </div>
      </header>
    );
  }
});
