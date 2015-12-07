var ProjectsIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {
      projects: ProjectStore.all()
    }
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._update)
  },

  componentWillUnMount: function () {
    ProjectStore.removeChangeListener(this._update)
  },

  _update: function () {
    this.setState({
      projects: ProjectStore.all()
    })
  },

  projectLinksList: function (project) {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var userID = this.props.params.userID;
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
        <h3 className="projects-index-heading">
          <span className="top">Projects</span>
        </h3>
        <Link to={this.props.params.userID + "/projects/new"}
          className="action-button new-project">
          New Project
        </Link>
        <ul className="project-links-list group">
          {this.projectLinksList()}
        </ul>
      </div>
    );
  }
});
