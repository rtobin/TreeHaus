var PingSearch = React.createClass({
  getFilteredMembers: function (e) {
    var val = e.target.value;
    // get members from memberstore and apply filter
  },

  render: function () {
    return (
      <div className="navbar-action ping-search">
        <input
          type="text"
          placeholder="Who do you want to ping?"
          onChange={this.getFilteredMembers} />
      </div>
    )
  }
});
