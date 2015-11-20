
var LogoNav = React.createClass({
  getInitialState: function () {
    return {
      dropdown: "dropdown-inactive"
    };
  },

  toggleDropdown: function (e) {
    e.preventDefault();
    if (this.state.dropdown === "dropdown-inactive") {
      this.setState({dropdown: "dropdown-active"});
    } else {
      this.setState({dropdown: "dropdown-inactive"});
    }
  },

  render: function () {
    debugger
    return (
      <div className="topnav-menu_container">
        <div className="topnav-menu_scroll">
          <h4 className="topnav-menu_heading">
            <span>{Project}</span>
          </h4>
        </div>

      </div>
    );
  }
});
