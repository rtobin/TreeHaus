(function (root) {
  var _members = {};

  var setMembers = function (members) {
    _members = $.extend({}, members);
  };

  var addMember = function (member) {
    _members[member.id] = member;
  };

  var deleteMember = function (memberID) {
    delete _members[memberID];
  };

  var MemberStore = root.MemberStore = $.extend({}, BaseStore, {
    // member store is for carrying members associated with a single project

    all: function () {
      return $.extend({}, _members);
    },

    clearMembers: function () {
      _members = {};
    },

    count: function () {
      return Object.keys(_members).length;
    },

    find: function(memberID) {
      return _members[memberID];
    },

    emails: function () {
      return Object.keys(_members).map(function (memberID) {
        return _members[memberID].email;
      })
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case MemberConstants.MEMBERS_RECEIVED:
          setMembers(payload.members);
          MemberStore.emitChange();
          break;
        case MemberConstants.MEMBER_CREATED:
          addMember(payload.member);
          MemberStore.emitChange();
          break;
        case MemberConstants.MEMBER_UPDATED:
          addMember(payload.member);
          MemberStore.emitChange();
          break;
        case MemberConstants.MEMBER_DESTROYED:
          deleteMember(payload.id);
          MemberStore.emitChange();
          break;
      }
    })
  });
})(this);
