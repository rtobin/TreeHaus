AuthUtil = {
  login: function (email, password) {
    // $.ajax ({
    //   type: 'POST',
    //   url: '/sessions/create',
    //   type: 'json',
    //   data: {
    //     email: email,
    //     password: password
    //   },
    //   success: function (payload) {
    //     // trigger LoginAction with the JWT
    //     LoginActions.loginUser(payload);
    //     return true;
    //   }
    // });
    $.post(
      'api/session',
      {user: {email: email, password: password}},
      function (user) {
        // trigger LoginAction with the JWT
        LoginActions.loginUser(user);
        return true;
      }
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
  signup: function (email, password) {
    // $.ajax ({
    //   type: 'POST',
    //   url: '/users/create',
    //   type: 'json',
    //   data: {
    //     email: email,
    //     password: password
    //   },
    //   success: function (payload) {
    //     // get a JWT back
    //     // let jwt = payload.session_token;
    //     // trigger LoginAction with the JWT
    //     LoginActions.loginUser(payload);
    //     return true;
    //   }
    // });
    $.post(
      'api/users',
      {user: {email: email, password: password}},
      function (user) {
        // trigger LoginAction with the JWT
        LoginActions.loginUser(user);
        return true;
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        LoginActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  }
};
