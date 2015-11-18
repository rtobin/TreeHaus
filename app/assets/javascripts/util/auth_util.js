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
      '/sessions/create',
      {email: email, password: password},
      function (user) {
        // trigger LoginAction with the JWT
        LoginActions.loginUser(user);
        return true;
      }
    )
  },

  logout: function () {
    // $.ajax ({
    //   type: 'POST',
    //   url: '/sessions/destroy',
    //   success: function (data) {
    //     LoginActions.logoutUser();
    //     return true;
    //   }
    // });
    $.post(
      '/sessions/destroy',
      filter,
      function () {
        // trigger LoginAction with the JWT
        LoginActions.logoutUser();
        return true;
      }
    )
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
    //     // debugger
    //     // let jwt = payload.session_token;
    //     // trigger LoginAction with the JWT
    //     LoginActions.loginUser(payload);
    //     return true;
    //   }
    // });
    $.post(
      '/users/create',
      {email: email, password: password},
      function (user) {
        // trigger LoginAction with the JWT
        LoginActions.loginUser(user);
        return true;
      }
    )
  }
};
