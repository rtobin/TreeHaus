
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
          <ul className="topnav-item group topnav-item-left list-unbulleted flush">
            <li><LatestActivity /></li>
            <li><Trees /></li>
            <li><Pings /></li>
            <li><a href="#">Hey!</a></li>
            <li><a href="#">Campfires</a></li>
            <li><a href="#">Reports</a></li>
          </ul>


          <h1 className="header-logo">
            <a href="#">Project Page</a>
          </h1>
        </div>
      </nav>
    );
  }
});
