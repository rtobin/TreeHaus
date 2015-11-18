var _errors = [];
var CHANGE_EVENT = "change";

var addErrors = function (errors) {
  errors.forEach(function(err){
    if (_errors.indexOf(err) === -1) {
      _errors.push(err);
    }
  })
};

var ErrorsStore = window.ErrorsStore = $.extend({}, BaseStore, {
  fetchErrors: function () {
    return _errors;
  },

  eraseErrors: function () {
    _errors = [];
  },

  dispatcherID: AppDispatcher.register( function (payload){
    switch(payload.actionType){
      case AuthConstants.AUTH_ERROR:
        addErrors(payload.errors);
        UserStore.emit(CHANGE_EVENT);
        break;
      default:
        break;
    }
  })
})
