( function(root) {
  root.Header = React.createClass({
    contextTypes: {
      router: React.PropTypes.func
    },

    render: function () {
      return(
        <div className="header-nav">
          <div className="header-nav-menu logo">
            Menu
          </div>
          <ul>
            <li>Recent Activity</li>
            <li>Projects</li>
            <li>
              <div className="search">Search</div>
            </li>
          </ul>
          <div className="header-nav-menu user">ME</div>
        </div>
      );
    }
  });
})(this);
