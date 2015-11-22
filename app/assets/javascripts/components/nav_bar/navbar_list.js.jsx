var NavbarList = React.createClass({
  render: function () {
    return (
      <ul className="nav-list group">

        <li><LatestActivity extra="activity-stuff"/></li>
        <li><Trees extra="trees-stuff"/></li>
        <li><Pings extra="pings-stuff"/></li>
        <li><Notifications extra="notifs-stuff"/></li>
        <li><Campfires extra="chats-stuff"/></li>
        <li><Reports extra="reports-stuff"/></li>
        <li><Search extra="search-stuff"/></li>
      </ul>
    )
  }
});
