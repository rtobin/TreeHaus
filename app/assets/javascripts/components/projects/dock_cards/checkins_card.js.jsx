var CheckInsCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <Link to={""}>
        <article className="dock-card checkins-card">
          <header className="card-header"><h3>Check-ins</h3></header>
          <main className="dock-card-content ">
            <div className="checkins-card-img"></div>
          </main>
        </article>
      </Link>
    );
  }
});
