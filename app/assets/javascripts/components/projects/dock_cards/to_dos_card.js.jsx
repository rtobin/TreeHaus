var ToDosCard = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    var progress = this.props.project.progress || {};
    var todosURL = this.props.params.userID + "/projects/";
    todosURL += this.props.params.projectID + "/todos";
    return (
      <Link to={todosURL}>
        <article className="dock-card todos-card">
          <header className="card-header"><h3>To-dos</h3></header>
          <main className="dock-card-content ">
            <div className="todos-card-img"></div>
            <small>{progress.total_done_count}/{progress.total_step_count}</small>
          </main>
        </article>
      </Link>
    );
  }
});
