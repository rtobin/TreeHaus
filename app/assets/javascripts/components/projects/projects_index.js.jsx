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
        <a href={'project' + project.id}>{project.title}</a>
      </li>
    });
  },

  render: function () {
    var Link = ReactRouter.Link;
        // <Sidebar />
      console.log(this.props.children);
    return (
      <div>
        <ProjectsHome />
        <h1>Projects</h1>
      </div>
    );
  }
});
