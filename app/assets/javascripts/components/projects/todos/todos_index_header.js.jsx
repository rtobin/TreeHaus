var TodosIndexHeader = React.createClass({
  render: function () {
    var progress = ProjectStore.currentProject().progress;
    return (
      <div className="section-header centered">
        <h1>To-dos</h1>
        <div className="progress">
          <span>{progress.total_done_count}/{progress.total_step_count}</span>
        </div>
      </div>
    );
  }
});
