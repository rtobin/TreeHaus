var ProjectsIndex = React.createClass({
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
    var Link = ReactRouter.Link;
        // <Sidebar />
      console.log(this.props.children);
    return (
      <div>
        <Header />
        <h1>Projects</h1>
      </div>
    );
  }
});
