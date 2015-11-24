(function (root) {
  var _user = {};
  var CHANGE_EVENT = "change";

  var signOutUser = function () {
    _user = {};
  };

  var signInUser = function (user) {
    _user = user;
  };

  var UserStore = root.UserStore = $.extend({}, BaseStore, {

    currentUser: function () {
      return $.extend({}, _user);
    },

    isSignedIn: function () {
      return (typeof _user.id !== "undefined");
    },

    dispatcherID: AppDispatcher.register( function (payload){
      switch(payload.actionType){
        case AuthConstants.SIGNIN_USER:
          // AppDispatcher.waitFor([ProjectStore.dispatcherId]);
          signInUser(payload.user);
          UserStore.emitChange();
          break;
        case AuthConstants.SIGNOUT_USER:
          signOutUser();
          UserStore.emitChange();
          break;
        default:
          break;
      }
    })
  });
})(this);
