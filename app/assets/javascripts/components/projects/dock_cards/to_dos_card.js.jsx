var ToDosCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    debugger
    var Link = ReactRouter.Link;
    return (
      <Link to={'todos'}>
        <article className="dock-card todos-card">
          <header className="card-header"><h3>To-dos</h3></header>
          <main class="dock-card-content ">
            <div className="todos-card-img"></div>
          </main>
        </article>
      </Link>
    );
  }
});
