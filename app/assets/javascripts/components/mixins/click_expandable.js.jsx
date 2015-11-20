var ClickExpandable = {
  componentWillMount: function () {
    this.setState({
      expanded: false,
      selector: randString(16)
      })
  },

  componentDidMount: function () {
    cb = function () {this.setState({expanded: false})};
    createClickOffHandler(this.state.selector, cb.bind(this));
  },

  toggleExpand: function (e) {
    e.preventDefault();
    if (this.state.expanded) {
      this.setState({expanded: false});
    } else {
      this.setState({expanded: true});
    }
    console.log(this.state.expanded);
  },

  expandableItem: function () {
    var style = {};
    if (!this.state.expanded) {
      style.display = 'none'
    }
    return (
      <div className="collapsible_content" style={style}>
        {this.expandedContent()}
      </div>
    )
  }
};
