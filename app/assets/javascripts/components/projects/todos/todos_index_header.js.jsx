var TodosIndexHeader = React.createClass({
  render: function () {
    var progress = {};
    if (this.props.todos && this.props.todos.progress) {
      progress = this.props.todos.progress;
    }
    var progressNum = 0;
    if (progress.total_step_count > 0) {
      progressNum = progress.total_done_count / progress.total_step_count;
    }

    var progressID = "progress-todos";
    var progressStr = progress.total_done_count + "/" + progress.total_step_count;
    return (
      <div className="section-header centered">
        <h1>Goals</h1>
          <ProgressCircle
            progressID={progressID}
            progressStr={progressStr}
            progressNum={progressNum}/>
      </div>
    );
  }
});
