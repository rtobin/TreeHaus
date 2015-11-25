var ChatsCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <Link to={""}>
        <article className="dock-card chats-card">
          <header className="card-header"><h3>Chats</h3></header>
          <main class="dock-card-content ">
            <div className="chats-card-img"></div>
          </main>
        </article>
      </Link>
    );
  }
});
