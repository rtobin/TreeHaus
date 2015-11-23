var ProjectsIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var user = UserStore.currentUser();
    return {
      userID: user.id,
      projects: user.projects
    };
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
        <DoStuffButton
          cb={this.handleButtonClick}
          btnClass="btn-new-project"
          text="Make a new project!"/>
      </div>
    );
  }
});
