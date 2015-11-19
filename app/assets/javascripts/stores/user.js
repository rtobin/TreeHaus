(function (root) {
  var _user = null;
  var CHANGE_EVENT = "change";

  var logOutUser = function () {
    _user = null;
  };

  var logInUser = function (user) {
    _user = user;
  };

  var UserStore = root.UserStore = $.extend({}, BaseStore, {

    getUser: function () {
      return _user;
    },

    isLoggedIn: function () {
      return !!_user;
    },

    dispatcherID: AppDispatcher.register( function (payload){
      switch(payload.actionType){
        case AuthConstants.LOGIN_USER:
          logInUser(payload.user);
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
