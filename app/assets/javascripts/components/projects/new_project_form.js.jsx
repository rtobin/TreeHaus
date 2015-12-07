var NewProjectForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    
    return {
      title: "",
      description: "",
      author_id: parseInt(this.props.params.userID),
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
    this.history.pushState(null, this.state.author_id + "/projects/" + projectID);
  },

  render: function () {
    var navlinkTitles = ["Projects"];
    var navlinkPaths = [
      this.props.params.userID + "/projects"
    ];
    return (
      <div className="panel">
        <article className="recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <header>
            <h1>
              Make A New Project!
            </h1>
          </header>
          <section className="project-content">
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
              </fieldset>

              <button type="submit" className="action-button"
                id="project-form-submit">Create Project</button>
            </form>
          </section>
        </article>
      </div>
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
    ProjectUtil.createProject(this.state);
  }
});
