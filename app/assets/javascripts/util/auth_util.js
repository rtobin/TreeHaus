AuthUtil = {
  // fetchCurrentUser: function () {
  //   $.ajax({
  //     url: '/api/session',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (currentUser) {
  //       UserActions.receiveCurrentUser(currentUser);
  //     }
  //   });
  // }
  fetchCurrentUser: function () {
    $.get(
      'api/session',
      function (user) {
        UserActions.signinUser(user);
      }
    )
  },

  signin: function (userParams) {
    $.post(
      'api/session',
      {user: userParams},
      function (user) {
        UserActions.signinUser(user);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UserActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  signout: function (history) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/session',
      success: function () {
        UserActions.signoutUser();
        return true;
      }
    });
  },

  signup: function (userParams) {
    $.post(
      'api/users',
      {user: userParams},
      function (user) {
        UserActions.signinUser(user);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UserActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  }
};
