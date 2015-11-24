var CheckInsCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    
    return (
      <Link to={""}>
        <div className="dock-card checkins-card">
          <h3 className="card-heading">
            <span>Check-ins</span>
          </h3>
        </div>
      </Link>
    );
  }
});
