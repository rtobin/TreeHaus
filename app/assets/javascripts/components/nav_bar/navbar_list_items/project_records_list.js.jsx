var ProjectRecordsList = React.createClass({
  componentDidMount: function () {
    RecordsStore.addProjectRecordsChangeListener(this._updateProjectRecords);
  },

  componentWillUnMount: function () {
    RecordsStore.removeProjectRecordsChangeListener(this._updateProjectRecords);
  },

  getInitialState: function () {
    return {
      projectRecords: []
    }
  },

  _updateProjectRecords: function () {
    this.setState({projectRecords: RecordsStore.projectRecords()})
  },

  render: function () {
    return (
      <ul className="project-records-list">
        {
          this.state.projectRecords.map(function (record){
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
