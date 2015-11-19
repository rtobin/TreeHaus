(function (root) {
  var _user = null;
  var CHANGE_EVENT = "change";
  // var _sessionToken = null;

  var logOutUser = function () {
    _user = null;
  };

  var logInUser = function (user) {
    _user = user;
  };

  var addErrors = function (errors) {
    errors.forEach(function(err){
      if (_errors.indexOf(err) === -1) {
        _errors.push(err);
        console.log(err);
      }
    })
  };

  var UserStore = root.UserStore = $.extend({}, BaseStore, {

    getUser: function () {
      return _user;
    },

    // getSessionToken: function () {
    //   return _sessionToken;
    // },

    isLoggedIn: function () {
      return !!_user;
    },

    dispatcherID: AppDispatcher.register( function (payload){
      switch(payload.actionType){
        case AuthConstants.LOGIN_USER:
          logInUser(payload.user)
          UserStore.emitChange();
          break;
        case AuthConstants.LOGOUT_USER:
          logOutUser();
          UserStore.emitChange();
          break;
        default:
          break;
      }
    })
  });
})(this);
