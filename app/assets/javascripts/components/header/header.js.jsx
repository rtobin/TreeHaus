
var Header = React.createClass({

  render: function () {
    return(
      <header class="header">
        <div class="header-wrap group">
          <LogoNav />

          <nav className="header-nav">
            <ul class="group">
              <li><a href="#">Latest activity</a></li>
              <li><a href="#">Basecamps</a></li>
              <li><a href="#">Pings</a></li>
              <li><a href="#">Hey!</a></li>
              <li><a href="#">Campfires</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </nav>

          <h1 className="header-logo">
            <a href="#">App Academy Students</a>
          </h1>
        </div>
      </header>
    );
  }
});
