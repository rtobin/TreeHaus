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

  projectLinksList: function () {
    var Link = ReactRouter.Link;
    var projects = this.state.projects;
    var userID = this.props.params.userID;
    var that = this;
    return (
      Object.keys(projects).map(function (projectID) {
        var project = projects[projectID];
        var url = userID + "/projects/" + projectID;
        var projectParams = {
          projectID: projectID,
          userID: userID
        }
        return (
          <tr key={projectID} >
            <td >
              <Link to={url}
                className="project-dir">
                {project.title}
              </Link>
            </td>
            <td className="projects-table-members"><MembersIndex
              params={projectParams}
              members={project.members}/></td>
          </tr>
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
        <div className="projects-index-table">
          <table className="project-links-list group">
            <tr><th>Title</th><th>Members</th></tr>
            {this.projectLinksList()}
          </table>
        </div>
        <Link to={this.props.params.userID + "/projects/new"}
          className="action-button new-project">
          New Project
        </Link>
      </div>
    );
  }
});
