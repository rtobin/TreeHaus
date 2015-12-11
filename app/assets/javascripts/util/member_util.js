MemberUtil = {
  fetchMembers: function(projectID) {
    $.ajax({
      url: "api/members",
      data: {
        memberable_id: memberableParams.memberable_id,
        memberable_type: memberableParams.memberable_type
      },
      success: function(members) {
        MemberActions.membersReceived(members);
      }
    });
  },

  createMember: function (memberParams) {
    $.post('api/members',
      {member: memberParams.member},
      function(member) {
        MemberActions.memberCreated(member);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  updateMember: function (memberParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/members/' + memberParams.id,
      data: {
        id: memberParams.id,
        member: memberParams
      },
      success: function (member) {
        MemberActions.memberUpdated(member);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  destroyMember: function (memberParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/members/' + memberParams.id,
      data: {id: memberParams.id},
      success: function () {
        MemberActions.memberDestroyed(memberParams.id);
      }
    });
  }
};
