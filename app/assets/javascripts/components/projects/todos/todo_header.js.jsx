var TodoHeader = React.createClass({
  componentWillReceiveProps: function (newProps) {
    this.setState(this._getProgress(newProps.progress || {}));
  },

  getInitialState: function () {
    return this._getProgress(this.props.progress || {});
  },

  _getProgress: function (progress) {
    var progressNum = 0;
    if (progress.step_count > 0) {
      progressNum = progress.done_count / progress.step_count;
    }
    return {
      progressID: "progress-todo-" + this.props.todo.id,
      progressStr: progress.done_count + "/" + progress.step_count,
      progressNum: progressNum
    }
  },

  render: function () {
    var todo = this.props.todo || {};
    var commentableParams = {type: "Todo", id: todo.id};
    return (
      <header className="todo-header" id="todo-header" >
        <h1>{todo.title}</h1>
        <ProgressCircle
          progressID={this.state.progressID}
          progressStr={this.state.progressStr}
          progressNum={this.state.progressNum}/>
        <CommentsCountBubble
          commentableParams={commentableParams}
          numComments={todo.num_comments} />
      </header>
    );
  }
});
