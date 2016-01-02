var LatestActivity = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      numUserRecords: 10,
      numProjectRecords: 10
    }
  },

  expandedContent: function () {
    return (
      <div className="nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
          <span className="top">My Latest Activites</span>
        </h3>
        <UserRecordsList />
        <h3 className="nav-menu-heading">
          <span className="bonus">This Project's Latest Activities</span>
        </h3>
        <ProjectRecordsList />
      </div>
    );
  },

  makeDropDown: function (e) {
    this.toggleExpand(e);

    // if (this.state.expanded) {
      var recordableParams1 = {
        recordable_id: UserStore.currentUser().id,
        recordable_type: "user",
        numRecords: this.state.numUserRecords
      };
      RecordUtil.fetchRecords(recordableParams1);

      if (ProjectStore.currentProjectID()) {
        var recordableParams2 = {
          recordable_id: ProjectStore.currentProjectID(),
          recordable_type: "project",
          numRecords: this.state.numProjectRecords
        };

        RecordUtil.fetchRecords(recordableParams2);
      }
    // }
  },

  render: function () {
    return (
      <div className= "navbar-action activities" id={this.state.dropdownSelectorId}
        onClick={this.makeDropDown}>
        <div id="navbar-clock"></div>
        Latest Activities
        {this.expandableItem()}
      </div>
    );
  }
});
