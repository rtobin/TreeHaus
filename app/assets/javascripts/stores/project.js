(function(root){

  var _projects = [];
  var CHANGE_EVENT = "change";

  var ProjectStore = root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _project.slice(0);
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case BenchConstants.BENCHES_RECEIVED:
          var result = resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
