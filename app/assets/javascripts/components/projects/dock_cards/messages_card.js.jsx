var MessagesCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    
    return (
      <Link to={""}>
        <div className="dock-card messages-card">
          <h3 className="card-heading">
            <span>Messages</span>
          </h3>
        </div>
      </Link>
    );
  }
});
