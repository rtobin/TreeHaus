var ProjectForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      title: "",
      description: "",
      authorID: UserStore.currentUser().id,
      archived: true
    };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.goToProjectHome);
  },

  componentWillUnMount: function () {
    ProjectStore.removeChangeListener(this.goToProjectHome);
  },

  render: function () {
    return (
      <form className="project-form" onSubmit={this.handleSubmit}>
        <h3 className="nav-menu-heading">
          <span>New Project</span>
        </h3>
        <input value={this.state.title}
          onChange={this.onTitleChange}
          placeholder="Name this project..." />

        <textarea value={this.state.description}
           onChange={this.onDescriptionChange}
           placeholder="Write a description of the project..." />
        <nav className="post-form-sub-nav flex-container">
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
    e.preventDefault();
    ProjectUtil.createProject(this.state);
    this.setState({body: ""});
  },

  goToProjectHome: function () {
    this.history.pushState(null, userID + "/projects");
  }
});
