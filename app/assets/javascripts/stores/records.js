(function (root) {
  var _records = {};
  var USER_RECORDS_CHANGE_EVENT = "userRecordsChange";
  var PROJECT_RECORDS_CHANGE_EVENT = "projectRecordsChange";


  var addUserRecords = function (records) {
    _records["user"] = records;
  };

  var addProjectRecords = function (records) {
    _records["project"] = records;
  };

  var RecordsStore = root.RecordsStore = $.extend({}, BaseStore, {
    // activity store is for carrying records associated with a single component

    projectRecords: function(){
      return _records["project"] || [];
    },

    userRecords: function(){
      return _records["user"] || [];
    },

    clearRecords: function () {
      _records = {};
    },

    addUserRecordsChangeListener: function (callback) {
      this.on(USER_RECORDS_CHANGE_EVENT, callback);
    },

    removerUserRecordsChangeListener: function (callback) {
      this.removeListener(USER_RECORDS_CHANGE_EVENT, callback);
    },

    addProjectRecordsChangeListener: function (callback) {
      this.on(PROJECT_RECORDS_CHANGE_EVENT, callback);
    },

    removerProjectRecordsChangeListener: function (callback) {
      this.removeListener(PROJECT_RECORDS_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case "USER_RECORDS_RECEIVED":
          addUserRecords(payload.records);
          RecordsStore.emit(USER_RECORDS_CHANGE_EVENT);
          break;
        case "PROJECT_RECORDS_RECEIVED":
          addProjectRecords(payload.records);
          RecordsStore.emit(PROJECT_RECORDS_CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
