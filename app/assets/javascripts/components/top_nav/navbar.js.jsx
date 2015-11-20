
var NavBar = React.createClass({

  render: function () {
    return(
      <nav className="topnav" id="my_navigation"  data-web-notifications="">
        <div className="topnav-ribbon group">
          <ul className="topnav-item  topnav-item-left list-unbulleted flush">
            <li className="topnav-menu topnav-menu-logo">
              <LogoAdmin />
            </li>
          </ul>
          <ul className="topnav-item topnav-item-progress list-unbulleted flush">

          </ul>
          <ul className="topnav-item topnav-item-centered list-unbulleted flush">
            <li><LatestActivity /></li>
            <li><Trees /></li>
            <li><Pings /></li>
            <li><Notifications /></li>
            <li><Campfires /></li>
            <li><Reports /></li>
            <li><Search /></li>
          </ul>
          <ul className="topnav-item topnav-item-search list-unbulleted flush">

          </ul>

          <ul className="topnav-item topnav-item-right list-unbulleted flush">
            <li className="topnav-menu">
              <ProfileManager />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});
