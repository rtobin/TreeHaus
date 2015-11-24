var SchedulesCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <Link to={""}>
        <div className="dock-card schedules-card">
          <h3 className="card-heading">
            <span>Schedules</span>
          </h3>
        </div>
      </Link>
    );
  }
});
