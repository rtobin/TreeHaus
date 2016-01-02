var _errors = {};
var CHANGE_EVENT = "change";

var addErrors = function (errors, errorid) {
  // errors.forEach(function(err){
  //   if (_errors.indexOf(err) === -1) {
  //     _errors.push(err);
  //   }
  // })
  _errors[errorid] = errors;
};

var ErrorsStore = window.ErrorsStore = $.extend({}, BaseStore, {
  fetchErrors: function (errorid) {
    return _errors[errorid];
  },

  eraseErrors: function (errorid) {
    delete _errors[errorid];
  },

  dispatcherID: AppDispatcher.register( function (payload){
    switch(payload.actionType){
      case UIConstants.RECEIVED_ERROR:
        addErrors(payload.errors, payload.errorid + "-expanded");
        ErrorsStore.emit(CHANGE_EVENT);
        break;
      default:
        break;
    }
  })
});
