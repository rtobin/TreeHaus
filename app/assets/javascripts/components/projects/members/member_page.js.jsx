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
    var memberID = this.props.params.memberID;
    this.setState({
      member: MemberStore.find(memberID) || {}
    });
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
              <strong>*** Current Assignments ***</strong>
            </label>
          </fieldset>
        </article>
      </div>
    );
  }
});
