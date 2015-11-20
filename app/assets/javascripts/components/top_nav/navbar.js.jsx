
var NavBar = React.createClass({

  render: function () {
    return(
      <nav className="topnav" id="my_navigation"  data-web-notifications="">
        <div className="topnav__ribbon">
          <LogoAdmin />

          <nav className="header-nav">
            <ul className="group">
              <li><a href="#">Latest activity</a></li>
              <li><a href="#">Basecamps</a></li>
              <li><a href="#">Pings</a></li>
              <li><a href="#">Hey!</a></li>
              <li><a href="#">Campfires</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </nav>

          <h1 className="header-logo">
            <a href="#">Project Page</a>
          </h1>
        </div>
      </nav>
    );
  }
});
