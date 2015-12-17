MemberPage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function(){
    var memberID = this.props.params.memberID;
    return {
      member: MemberStore.find(memberID) || {}
    };
  },

  componentWillReceiveProps: function (newProps) {
    var memberID = newProps.params.memberID;
    this.setState({
      member: MemberStore.find(memberID) || {}
    });
  },

  componentDidMount: function () {
    MemberStore.addChangeListener(this._updateMember);
  },

  componentWillUnMount: function () {
    MemberStore.removeChangeListener(this._updateMember);
  },

  _updateMember: function () {
    if (this.isMounted()) {
      var memberID = this.props.params.memberID;
      this.setState({
        member: MemberStore.find(memberID) || {}
      });
    }
  },

  _assignmentRows: function () {
    var Link = ReactRouter.Link;
    var member = this.state.member;
    var assignments = member.assignments;
    var stepURL = this.props.params.userID + "/projects/";
    stepURL += this.props.params.projectID + "/steps/";
    var todoURL = this.props.params.userID + "/projects/";
    todoURL += this.props.params.projectID + "/todos/";
    var todos = ProjectStore.currentProject().todos;
    if (typeof assignments === "undefined") {
      return (
        <div className="assignments-item-row">
          <div className="assignments-left">
            <span>n/a</span>
          </div>
          <div className="assignments-right">
            <span> </span>
          </div>
        </div>
      );
    } else {
      return Object.keys(assignments).map(function (stepID) {
        var step = assignments[stepID];
        debugger
        return (
          <div className="assignments-item-row">
            <div className="ass-table-item assignments-left">
              <span><Link to={stepURL + stepID} >{step.title}</Link></span>
            </div>
            <div className="ass-table-item assignments-right">
              <span><Link to={todoURL + step.todo_id}>{todos[step.todo_id].title}</Link></span>
            </div>
          </div>
        );

      });
    }
  },

  render: function () {
    var email = this.state.member.email || "";
    var name = this.state.member.name || email.split("/")[0];
    var member = this.state.member;
    return (
      <div className="member-page">
        <article className="recordable ">
          <header>
            <h1>
              <UserAvatar user={this.state.member}/>
              <span>{name + "'s "} Profile</span>
            </h1>
          </header>
          <fieldset className="profile-form-fieldset">
            <label>
              <span>Email</span>
              <input className="profile-form-input"
                value={member.email}
                readOnly={true}
                placeholder="n/a" />
            </label>
            <label>
              <span>Job title</span>
              <input className="profile-form-input"
                value={member.title}
                readOnly={true}
                placeholder="n/a" />
            </label>
            <label>
              <span>Current Assignments in Project</span>
              <div className="assignments-index-table">
                <div className="assignments-header">
                  <div className="ass-table-item assignments-left">
                    <span>Title</span>
                  </div>
                  <div className="ass-table-item assignments-right">
                    <span>Goal</span>
                  </div>
                </div>
                {
                  this._assignmentRows()
                }
              </div>
            </label>
          </fieldset>
        </article>
      </div>
    );
  }
});
