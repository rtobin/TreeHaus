var NewProjectForm = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {

    return {
      title: "",
      description: "",
      author_id: parseInt(this.props.params.userID),
      memberEmails: "",
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
      <div className="panel new-project-panel">
        <article className="recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <br/>
            <form className="form-horizontal" onSubmit={this._handleSubmit}>
            <fieldset>
            <legend>Make A New Project!</legend>
<<<<<<< HEAD
            <Errors errorid="new-project-expanded" />
=======
            <Errors />
>>>>>>> 806aa69f204cd7e096175e7addf1645ae5925d56
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput1">Project Title</label>
                <div className="col-md-4">
                <input id="textinput1" name="textinput1" type="text"
                  placeholder=""
                  className="form-control input-md"
                  required="" value={this.state.title}
                  onChange={this._onTitleChange} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput2">Members</label>
                <div className="col-md-4">
                  <input id="textinput2" name="textinput2" type="text"
                    placeholder=""
                    className="form-control input-md"
                    value={this.state.memberEmails}
                    onChange={this._onMemberEmailsChange} />
                  <p className="help-block">separate emails by commas...</p>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textarea">Project Description</label>
                <div className="col-md-4">
                  <textarea className="form-control" id="textarea" name="textarea"
                    value={this.state.description}
                    onChange={this._onDescriptionChange}></textarea>
                </div>
              </div>
            </fieldset>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
              <div className="col-md-4">
                <button id="singlebutton" name="singlebutton" className="btn btn-success">Create Project</button>
              </div>
            </div>
            </form>

        </article>
      </div>
    );
  },

  _onMemberEmailsChange: function (e) {
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
    ProjectUtil.createProject(this.state);
  }
});
