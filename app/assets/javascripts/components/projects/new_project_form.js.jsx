var NewProjectForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      title: "",
      description: "",
      author_id: parseInt(UserStore.currentUser().id),
      archived: false
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
      <form className="project-form" onSubmit={this.handleSubmit}>
        <Errors />
        <h3 className="nav-menu-heading">
          <span>New Project</span>
        </h3>
        <input value={this.state.title}
          onChange={this.onTitleChange}
          placeholder="Name this project..." />

        <textarea value={this.state.description}
           onChange={this.onDescriptionChange}
           placeholder="Write a description of the project..." />
        <nav className="post-form ">
          <button type="submit">Create Project</button>
        </nav>
      </form>
    );
  },

  onDescriptionChange: function (e) {
    this.setState({description: e.target.value});
  },

  onTitleChange: function (e) {
    this.setState({title: e.target.value});
  },

  handleSubmit: function (e) {
    debugger
    e.preventDefault();
    ProjectUtil.createProject(this.state);
  }
});
