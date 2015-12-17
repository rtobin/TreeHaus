var UpdateProjectForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var projectID = this.props.params.projectID;
    var project = ProjectStore.all()[projectID] || {};
    return {
      id: projectID,
      title: project.title,
      description: project.description,
      userID: parseInt(this.props.params.userID),
      memberEmails: "",
      archived: false
    };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._redirectToNewProjectPage);
  },

  componentWillUnMount: function () {
    ProjectStore.removeChangeListener(this._redirectToNewProjectPage);
  },

  _redirectToNewProjectPage: function () {
    var projectID = ProjectStore.currentProject().id;
    this.history.pushState(null, this.state.userID + "/projects/" + projectID);
  },

  render: function () {
    var navlinkTitles = ["Projects", this.state.title];
    var navlinkPaths = [
      this.props.params.userID + "/projects",
      this.props.params.userID + "/projects/" + this.props.params.projectID
    ];
    return (
      <div className="panel">
        <article className="recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <header>
            <h1>
              Update Project
            </h1>
          </header>
          <section className="update-project">
            <form className="project-form" onSubmit={this._handleSubmit}>
              <Errors />
              <fieldset className="project-form-fieldset">
                <label>
                  <span>Title</span>
                  <input className="project-form-input"
                    value={this.state.title}
                    onChange={this._onTitleChange}
                    placeholder="Name this project..." />
                </label>
                <label>
                  <span>Description</span>
                  <textarea className="project-form-textarea"
                    value={this.state.description}
                    onChange={this._onDescriptionChange}
                    placeholder="Write a description of the project..." />
                </label>
                <label>
                  <span>Add Members</span>
                  <input className="project-form-input"
                    value={this.state.memberEmails}
                    onChange={this._onMembersEmailsChange}
                    placeholder="Enter emails..." />
                </label>
              </fieldset>

              <button type="submit" className="action-button"
                id="project-form-submit">Update Project</button>
            </form>
          </section>
        </article>
      </div>
    );
  },

  _onMembersEmailsChange: function (e) {
    this.setState({memberEmails: e.target.value});
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
