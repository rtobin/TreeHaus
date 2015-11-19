var Project = React.createClass({

  render: function () {
    return (
      <ul class="profile-friends group">
        <li><a href="#" class="card chats" title="Chats">
          <Card />
        </a></li>
      <li><a href="#" class="card todos" title="Todos">
          <Card />
        </a></li>
      <li><a href="#" class="card messages" title="Messages">
          <Card />
        </a></li>
        <li><a href="#" class="card todo" title="Todos">
          <Card />
        </a></li>
        <li><a href="#" class="card todo" title="Todos">
          <Card />
        </a></li>
        <li><a href="#" class="card todo" title="Todos">
          <Card />
        </a></li>
      </ul>
    )
  }
})
