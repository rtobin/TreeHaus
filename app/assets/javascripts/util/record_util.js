RecordUtil = {
  fetchRecords: function(recordableParams) {
    $.ajax({
      url: "api/records",
      data: {
        recordable_id: recordableParams.recordable_id,
        recordable_type: recordableParams.recordable_type,
        num_records: recordableParams.numRecords
      },
      success: function(records) {

        RecordActions.recordsReceived(records);
      }
    });
  }
}
