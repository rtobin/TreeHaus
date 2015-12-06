var TodoHeader = React.createClass({
  render: function () {
    var progress = this.props.todo.progress || {};
    var progressNum = 0;
    if (progress.step_count > 0) {
      progressNum = progress.done_count / progress.step_count;
    }

    var progressID = "progress-todo-" + this.props.todo.id;
    var progressStr = progress.done_count + "/" + progress.step_count;
    var todo = this.props.todo || {};
    var commentableParams = {type: "Todo", id: todo.id};
    return (
      <header className="todo-header" id="todo-header" >
        <h1>{todo.title}</h1>
        <ProgressCircle
          progressID={progressID}
          progressStr={progressStr}
          progressNum={progressNum}/>
        <CommentsCountBubble
          commentableParams={commentableParams}
          numComments={todo.num_comments} />
      </header>
    );
  }
});
