var NavbarList = React.createClass({
  render: function () {
    return (
      <ul className="navbar-list group">
        <li><LatestActivity /></li>
        <li><Trees /></li>
        <li><Pings /></li>
        <li><Notifications /></li>
        <li><Campfires /></li>
        <li><Reports /></li>
        <li><Search /></li>
      </ul>
    )
  }
});
