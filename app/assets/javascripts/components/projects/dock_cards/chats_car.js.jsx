var ChatsCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    
    return (
      <Link to={""}>
        <div className="dock-card chats-card">
          <h3 className="card-heading">
            <span>Chats</span>
          </h3>
        </div>
      </Link>
    );
  }
});
