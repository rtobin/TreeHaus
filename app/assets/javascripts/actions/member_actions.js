MemberActions = {
  membersReceived: function (members) {
    AppDispatcher.dispatch({
      actionType: MemberConstants.MEMBERS_RECEIVED,
      members: members
    });
  },

  memberCreated: function (member) {
    AppDispatcher.dispatch({
      actionType: MemberConstants.MEMBER_CREATED,
      member: member
    });
  },

  memberUpdated: function (member) {
    AppDispatcher.dispatch({
      actionType: MemberConstants.MEMBER_UPDATED,
      member: member
    });
  },

  memberDestroyed: function (memberID) {
    AppDispatcher.dispatch({
      actionType: MemberConstants.MEMBER_DESTROYED,
      memberID: memberID
    });
  },

  memberReceived: function (member) {
    AppDispatcher.dispatch({
      actionType: MemberConstants.MEMBER_RECEIVED,
      member: member
    });
  }
};
