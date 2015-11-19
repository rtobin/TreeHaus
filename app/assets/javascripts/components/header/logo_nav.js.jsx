
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

  projectLinks: function () {
    var Link = ReactRouter.Link;
    return ProjectStore.all().map(function (project, idx) {
      <li key={idx}>
        <Link to={project.id}>{project.title}</Link>
      </li>
    });
  },

  render: function () {
    debugger
    return (
      <div>
        <a href="#" className="header-logo">Projects</a>
        <ul className={"header-projects-nav" + this.state.dropdown}
          onClick={this.toggleDropdown}>
          {this.projectLinks()}
          <li><a>test 1</a></li>
          <li><a>test 2</a></li>
          <li><a>test 3</a></li>
        </ul>
      </div>
    );
  }
});
