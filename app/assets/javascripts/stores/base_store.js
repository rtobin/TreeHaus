(function (root) {
  var CHANGE_EVENT = "change";

  root.BaseStore = root.UserStore = $.extend({}, EventEmitter.prototype, {

    emitChange: function () {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  });
})(this);
