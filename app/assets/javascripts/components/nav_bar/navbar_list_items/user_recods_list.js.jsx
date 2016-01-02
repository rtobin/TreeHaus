var UserRecordsList = React.createClass({
  componentDidMount: function () {
    RecordsStore.addUserRecordsChangeListener(this._updateUserRecords);
  },

  componentWillUnMount: function () {
    RecordsStore.removeUserRecordsChangeListener(this._updateUserRecords);
  },

  getInitialState: function () {
    return {
      userRecords: []
    }
  },

  _updateUserRecords: function () {
    this.setState({userRecords: RecordsStore.userRecords()})
  },

  render: function () {
    
    return (
      <ul className="user-records-list">
        {
          this.state.userRecords.map(function (record){
            return (
              <li key={record.id} className="records-list-item">
                <p>
                  {moment(record.created_at).fromNow()}: {record.name}
                </p>
              </li>
            )
          })
        }
      </ul>
    )
  }
});
