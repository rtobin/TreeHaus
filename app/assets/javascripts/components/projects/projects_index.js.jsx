var ProjectsIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var user = UserStore.currentUser();
    return {
      userID: user.id,
      projects: user.projects
    };
  },

  fetchProject: function (projectID) {
    ProjectUtil.fetchSingleProject(projectID);
  },

  projectLinksList: function (project) {
    var Link = ReactRouter.Link;
    var that = this;
    return (
      this.state.projects.map(function (project, idx) {
        return (
          <li key={project.id}>
            <Link to={ that.state.userID + "/projects/" + project.id}
              project={project}
              onClick={this.fetchProject}>
              {project.title}
            </Link>
          </li>
        )
      })
    );
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
          className="projects-index-new-btn">
          Make new project
        </Link>
      </div>
    );
  }
});
