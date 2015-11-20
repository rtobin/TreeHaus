var ProjectsIndex = React.createClass({
  getInitialState: function () {
    return {
      dropdown: "dropdown-inactive"
    };
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
        <ProjectHome />
        <h1>Projects</h1>
      </div>
    );
  }
});
