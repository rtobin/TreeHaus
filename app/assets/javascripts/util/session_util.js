SessionUtil = {
  fetchCurrentUser: function () {
    $.get(
      'api/session',
      function (user) {
        SessionActions.signinUser(user);
      }
    );
  },

  signin: function (userParams) {
    $.post(
      'api/session',
      {user: userParams},
      function (user) {
        SessionActions.signinUser(user);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  signout: function () {
    $.ajax ({
      type: 'DELETE',
      url: 'api/session',
      success: function () {
        SessionActions.signoutUser();
        return true;
      }
    });
  },

  signup: function (userParams) {
    $.post(
      'api/users',
      {user: userParams},
      function (user) {
        SessionActions.signinUser(user);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  }
};
