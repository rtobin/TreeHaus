var MembersIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      members: MemberStore.all()
    };
  },

  componentDidMount: function () {
    MemberStore.addChangeListener(this._updateMembers);
  },

  componentWillUnMount: function () {
    MemberStore.removeChangeListener(this._updateMembers);
  },

  _updateMembers: function () {
    this.setState({
      members: MemberStore.all()
    });
  },

  memberPageLinksList: function () {
    var Link = ReactRouter.Link;
    var members = this.state.members;
    var userID = this.props.params.userID;
    var projectID = this.props.params.projectID;
    var that = this;
    return (
      Object.keys(members).map(function (memberID) {
        var member = members[memberID];
        var url = userID + "/projects/" + projectID;
        url += "/members/" + memberID;
        return (
          <li key={memberID} className="member-list-item">
            <Link to={url}
              className="member-button member-dir">
              <UserAvatar user={member} />
            </Link>
          </li>
        );
      })
    );
  },

  render: function () {
    return (
      <div className="members-index">
        <ul className="member-links-list group">
          {this.memberPageLinksList()}
        </ul>
      </div>
    );
  }
});
