var UpdateProjectForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var project = this.props.project;
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      author_id: parseInt(this.props.currentUser.id),
      archived: project.archived
    };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.redirectToNewProjectPage);
  },

  componentWillUnMount: function () {
    ProjectStore.removeChangeListener(this.redirectToNewProjectPage);
  },

  redirectToNewProjectPage: function () {
    var projectID = ProjectStore.currentProject().id;
    this.history.pushState(null, this.state.authorID + "/projects/" + projectID);
  },

  render: function () {
    return (
      <form className="project-form" onSubmit={this._handleSubmit}>
        <Errors />
        <h3 className="nav-menu-heading">
          <span>Update Project: {this.state.title}</span>
        </h3>
        <input value={this.state.title}
          onChange={this._onTitleChange}
          placeholder="Name this project..." />

        <textarea value={this.state.description}
           onChange={this._onDescriptionChange}
           placeholder="Write a description of the project..." />
        <nav className="post-form ">
          <button type="submit">Update Project</button>
        </nav>
      </form>
    );
  },

  _onDescriptionChange: function (e) {
    this.setState({description: e.target.value});
  },

  _onTitleChange: function (e) {
    this.setState({title: e.target.value});
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    ProjectUtil.updateProject(this.state);
  }
});
