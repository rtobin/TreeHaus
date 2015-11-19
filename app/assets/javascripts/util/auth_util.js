AuthUtil = {
  login: function (userParams, cb) {
    $.post(
      'api/session',
      {user: userParams},
      cb
    ).fail(function () {
        var args = [].slice.call(arguments);
        LoginActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  logout: function () {
    $.ajax ({
      type: 'DELETE',
      url: 'api/session',
      success: function () {
        LoginActions.logoutUser();
        return true;
      }
    });
  },
  signup: function (userParams, cb) {
    $.post(
      'api/users',
      {user: userParams},
      cb
    ).fail(function () {
        var args = [].slice.call(arguments);
        LoginActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  }
};
