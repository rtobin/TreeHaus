var ProjectsIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var user = UserStore.currentUser() || {};
    return {
      userID: user.id,
      projects: user.projects || {}
    };
  },

  projectLinksList: function (project) {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        return (
          <li key={projectID}>
            <Link to={ that.state.userID + "/projects/" + projectID}
              className="project-button project-dir"
              project={project}>
              {project.title}
            </Link>
          </li>
        );
      })
    );
  },

  handleButtonClick: function () {
    this.history.pushState(null, this.state.userID + "/projects/new");
  },

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="projects-index">
        <h3 className="projects-index-heading nav-menu-heading">
          <span className="top">Projects</span>
        </h3>
        <ul className="project-links-list group">
          {this.projectLinksList()}
        </ul>
        <Link to={this.state.userID + "/projects/new"}
          className="project-button new-project">
          +
        </Link>
      </div>
    );
  }
});
