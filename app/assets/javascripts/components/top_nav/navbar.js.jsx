
var NavBar = React.createClass({

  render: function () {
    return(
      <nav className="topnav" id="my_navigation"  data-web-notifications="">
        <div className="topnav__ribbon">
          <ul className="topnav-item group topnav-item-left list-unbulleted flush">
            <li className="topnav-menu topnav-menu-logo">
              <LogoAdmin />
            </li>
          </ul>
          <ul className="topnav-item group topnav-item-progress list-unbulleted flush">
            <li className="topnav-menu topnav-menu-logo">
              <LatestActivity />
            </li>
          </ul>
          <ul className="topnav-item group topnav-item-centered list-unbulleted flush">
            <li><Trees /></li>
            <li><Pings /></li>
            <li><Notifications /></li>
            <li><Campfires /></li>
            <li><Reports /></li>
          </ul>
          <ul className="topnav-item group topnav-item-search list-unbulleted flush">
            <li className="topnav-menu topnav-menu-logo">
              <Search />
            </li>
          </ul>

          <ul className="topnav-item group topnav-item-right list-unbulleted flush">
            <li className="topnav-menu topnav-menu-logo">
              <ProfileManager />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});
