var MessagesCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <Link to={""}>
        <article className="dock-card messages-card">
          <header className="card-header"><h3>Messages</h3></header>
          <main className="dock-card-content ">
            <div className="messages-card-img"></div>
          </main>
        </article>
      </Link>
    );
  }
});
