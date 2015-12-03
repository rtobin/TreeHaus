var ProjectsIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      currentUser:  this.props.currentUser,
      projects: this.props.projects
    };
  },

  // componentDidMount: function () {
  //   UserStore.addChangeListener(this._update)
  // },
  //
  // componentWillUnMount: function () {
  //   UserStore.removeChangeListener(this._update)
  // },
  //
  // _update: function () {
  //   this.setState({
  //     projects: ProjectStore.all(),
  //     user: UserStore.currentUser()
  //   })
  // },

  projectLinksList: function (project) {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        var url = that.state.currentUser.id + "/projects/" + projectID;
        return (
          <li key={projectID}>
            <Link to={url}
              className="project-button project-dir">
              {project.title}
            </Link>
          </li>
        );
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
          className="project-button new-project">
          +
        </Link>
      </div>
    );
  }
});
