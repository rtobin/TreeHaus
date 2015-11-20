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

  expandableLoad: function () {
    if (this.state.expanded) {
      return this.expandedContent();
    }
  },

  expandableItem: function () {
    return (
      <div className="collapsible_content"
        id={this.state.selector}
        onClick={this.toggleExpand}>
          exp
          {this.expandableLoad()}
      </div>
    )
  }
};
