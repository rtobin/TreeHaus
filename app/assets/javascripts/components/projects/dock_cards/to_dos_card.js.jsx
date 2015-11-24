var ToDosCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <Link to={''}>
        <div className="dock-card todo-card">
          <h3 className="card-heading">
            <span>To-dos</span>
          </h3>
        </div>
      </Link>
    );
  }
});
