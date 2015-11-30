(function (root) {
  var _user = {};
  _user.email = "not signed in";
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

    currentUserName: function () {
      return _user.name || _user.email.split("@")[0];
    },

    isSignedIn: function () {
      return (typeof _user.id !== "undefined");
    },

    dispatcherID: AppDispatcher.register( function (payload){
      switch(payload.actionType){
        case SessionConstants.SIGNIN_USER:
          // AppDispatcher.waitFor([ProjectStore.dispatcherID]);
          if (payload.user.id) {
            signInUser(payload.user);
            UserStore.emitChange();
          }
          break;
        case SessionConstants.SIGNOUT_USER:
          signOutUser();
          UserStore.emitChange();
          break;
        default:
          break;
      }
    })
  });
})(this);
