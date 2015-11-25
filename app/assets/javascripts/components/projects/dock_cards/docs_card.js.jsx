var DocsCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <Link to={""}>
        <article className="dock-card docs-card">
          <header className="card-header"><h3>Docs</h3></header>
          <main class="dock-card-content ">
            <div className="docs-card-img"></div>
          </main>
        </article>
      </Link>
    );
  }
});
