var SchedulesCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <Link to={""}>
        <article className="dock-card schedules-card">
          <header className="card-header"><h3>Schedules</h3></header>
            <main className="dock-card-content ">
              <div className="schedules-card-img"></div>
            </main>
        </article>
      </Link>
    );
  }
});
