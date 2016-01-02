RecordActions = {
  recordsReceived: function (records) {
    var actionType;
    var type = records.type;
    actionType = type == "user" ? "USER_RECORDS_RECEIVED" : "PROJECT_RECORDS_RECEIVED"

    AppDispatcher.dispatch({
      actionType: actionType,
      records: records.records
    });
  }
}
