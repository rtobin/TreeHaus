var ToDosCard = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    var progress = {};
    if (this.props.project.todos && this.props.project.todos.progress) {
      progress = this.props.project.todos.progress;
    }
    var progressNum = 0;
    if (progress.total_step_count > 0) {
      progressNum = progress.total_done_count / progress.total_step_count;
    }

    var progressID = "progress-todos-card";
    var progressStr = progress.total_done_count + "/" + progress.total_step_count;

    var todosURL = this.props.params.userID + "/projects/";
    todosURL += this.props.params.projectID + "/todos";
    return (
      <Link to={todosURL}>
        <article className="dock-card todos-card">
          <header className="card-header">
            <h3>Goals</h3>
              <ProgressCircle
                progressID={progressID}
                progressStr={progressStr}
                progressNum={progressNum}/>
          </header>
          <main className="dock-card-content ">
            <div className="todos-card-img"></div>

          </main>
        </article>
      </Link>
    );
  }
});
