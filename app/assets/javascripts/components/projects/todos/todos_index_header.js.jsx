var TodosIndexHeader = React.createClass({
  render: function () {
    var progress = {};
    if (this.props.project && this.props.project.progress) {
      progress = this.props.project.progress;
    }
    var progressNum = 0;
    if (progress.step_count > 0) {
      progressNum = progress.done_count / progress.step_count;
    }

    var progressID = "progress-todos";
    var progressStr = progress.done_count + "/" + progress.step_count;
    return (
      <div className="section-header centered">
        <h1>To-dos</h1>
          <ProgressCircle
            progressID={progressID}
            progressStr={progressStr}
            progressNum={progressNum}/>
      </div>
    );
  }
});
