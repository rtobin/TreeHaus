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

  _deleteProject: function() {

    ProjectUtil.destroyProject({id: this.props.projectID})
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
        };
        return (
          <div className="project-index-row" key={projectID} >
            <h3 className="projects-table-title">
              <Link to={url}
                className="project-dir">
                {project.title}
              </Link>
            </h3>
            <h3 className="projects-table-members">
              <MembersIndex
                params={projectParams}
                members={project.members}/>
            </h3>
          </div>
        );
      })
    );
  },

  // <td>
  //   <div className="delete-project-button"
  //     onclick={that._deleteProject}>
  //   </div>
  // </td>

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="projects-index">
        <h3 className="projects-index-heading">
          <span className="top">Projects</span>
        </h3>
        <div className="projects-index-table">
          <div className="project-links-list group">
            <div className="project-index-row">
              <strong>Title</strong><strong>Members</strong>
            </div>
            {this.projectLinksList()}
          </div>
        </div>
        <Link to={this.props.params.userID + "/projects/new"}
          className="action-button new-project">
          New Project
        </Link>
      </div>
    );
  }
});
