(function (root) {
  var _user = null;
  var _sessionToken = null;

  var logOutUser = function () {
    _user = null;
  };

  var logInUser = function (user) {
    _user = user;
  };

  var LoginStore = root.LoginStore = $.extend({}, BaseStore, {

    getUser: function () {
      return _user;
    },

    getSessionToken: function () {
      return _sessionToken;
    },

    isLoggedIn: function () {
      return !!_user;
    },

    dispatcherID: AppDispatcher.register( function (payload){
      switch(payload.actionType){
        case AuthConstants.LOGIN_USER:
          // this._user = jwt_decode(this._jwt);
          logInUser(payload.user)
          this.emitChange();
          break;
        case AuthConstants.LOGOUT_USER:
          logOutUser();
          this.emitChange();
          break;
        default:
          break;
      }
    })
  });
})(this);
