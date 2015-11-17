AuthService = {
  login: function (email, password) {
    $.ajax ({
      type: 'POST',
      url: '/sessions/create',
      type: 'json',
      data: {
        email: email,
        password: password
      },
      success: function (responses) {
        // get a JWT back
        let jwt = response.id_token;
        // trigger LoginAction with the JWT
        LoginActions.loginUser(jwt);
        return true;
      }
    });
  },

  signup: function (email, password) {

  }
};
