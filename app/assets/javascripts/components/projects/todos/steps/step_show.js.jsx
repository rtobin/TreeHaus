var StepShow = React.createClass({
  getInitialState: function () {
    var stepID = this.props.params.stepID || this.props.location.pathname.split("/")[5];
    var step = ProjectStore.findStep(stepID) || {} ;
    return {
      stepID: stepID,
      step: step
    };
  },

  componentWillReceiveProps: function (newProps) {
    var stepID = newProps.params.stepID || newProps.location.pathname.split("/")[5];
    var step = ProjectStore.findStep(stepID) || {} ;
    this.setState({
      stepID: stepID,
      step: step
    })
  },

  componentDidMount: function () {
    ProjectStore.addProjectChangeListener(this._getStep);
    ProjectStore.addStepsChangeListener(this._getStepAndFetchProject);
  },

  componentWillUnmount: function () {
    ProjectStore.removeProjectChangeListener(this._getStep);
    ProjectStore.removeStepsChangeListener(this._getStepAndFetchProject)
  },

  _getStep: function () {
    if (this.isMounted()) {
      this.setState({
        step: ProjectStore.findStep(this.state.stepID)
      });
    }
  },

  _activateDeleteModal: function (e) {
    e.preventDefault();
    var stepParams = {
      id: this.props.params.stepID,
      todoID: this.state.step.todoID,
      projectID: this.props.params.projectID
    };
    var userID = this.props.params.userID;
    var projectID = this.props.params.projectID;
    var todoID = this.state.step.todo_ID;
<<<<<<< HEAD
    var question = 'are you sure you want to delete the task: "';
    question += this.state.step.title + '"?';
    var redirectURL = userID + '/projects/' + projectID + '/todos/' + todoID;
=======
    var question = "are you sure you want to delete the task: ";
    question += this.state.step.title + "?";
    var redirectURL = userID + "/projects/" + projectID + "/todos/" + todoID;
>>>>>>> 806aa69f204cd7e096175e7addf1645ae5925d56

    ModalActions.activateModal(
      question,
      function () {
        TodoUtil.destroyStep(stepParams);
      },
      redirectURL
    );
  },


  _getStepAndFetchProject: function () {
    if (this.isMounted()) {
      this.setState({
        step: ProjectStore.findStep(this.state.stepID)
      });
      ProjectUtil.fetchProject(this.props.params.projectID);
    }
  },

  _getFancyDatetime: function (date) {
    var newDate;
    if (date && date !== "") {
      newDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
      newDate += "  (" + moment(date).fromNow() + ")";
    }
    return newDate;
  },

  _dueTimes: function (step) {
    var step = this.state.step;
    var due_at = this._getFancyDatetime(step.due_at) || "no due time";
    var start_at = this._getFancyDatetime(step.start_at);
    if (start_at) {
      return (
        <div>
          <label>
            <strong>Starts at:</strong>
            <div className="step-detail">
              <span>
                {start_at}
              </span>
            </div>
          </label>
          <label>
            <strong>Due by:</strong>
            <div className="step-detail">
              <span>
                {due_at}
              </span>
            </div>
          </label>
        </div>
      )
    } else {
      return (
        <label>
          <strong>Due by:</strong>
          <div className="step-detail">
            <span>
              {due_at}
            </span>
          </div>
        </label>
      )
    }
  },

  render: function () {
    var userID = this.props.params.userID;
    var projectID = this.props.params.projectID;
    var step = this.state.step;
    var commentableParams = {
      commentable_type: "Step",
      commentable_id: this.props.params.stepID
    };
    var todos = ProjectStore.currentProject().todos || {};
    var todo = todos[step.todo_id] || {};
    var todoTitle = todo.title;
    var navlinkTitles = ["Goals", todoTitle];
    var navlinkPaths = [
      userID + "/projects/" + projectID + "/todos",
      userID + "/projects/" + projectID + "/todos/" + step.todo_id
    ];
    var assignees = step.assignees || {};


    // var emails = Object.keys(assignees).map(function (userID) {
    //   var user = assignees[userID];
    //   return user.name || user.email;
    // })

    var projectParams = {
      projectID: projectID,
      userID: userID
    };
    return (
      <div className="show-panel">
        <article className="recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <StepHeader params={this.props.params} step={step} stepID={this.state.stepID}/>
          <div className="delete-step-button"
            onClick={this._activateDeleteModal}
            title="delete task">
          </div>
          <section className="step-details" >
            {this._dueTimes(step)}
            <label>
              <strong>Assigned to:</strong>
                <MembersIndex
                  params={projectParams}
                  members={assignees}/>
            </label>
            <label>
              <strong>Notes:</strong>
              <p className="step-detail">{step.body}</p>
            </label>

          </section>
        </article>
        <CommentList commentableParams={commentableParams} projectID={projectID}/>
      </div>
    )
  }
});
