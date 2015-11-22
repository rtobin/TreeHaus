var ClickExpandable = {

  componentWillMount: function () {
    // need to put a unique id for the selector
    this.setState({
      expanded: false,
      selector: randString(16)
    });
  },

  makeExpandedFalse: function () {
    if (this.state.expanded){
      this.setState({expanded: false});
    }
  },

  componentDidMount: function () {
    createClickOffHandler(this.state.selector, this.makeExpandedFalse);
  },

  toggleExpand: function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({expanded: !this.state.expanded});

  },

  expandableItem: function () {
    var style = "-inactive";
    if (this.state.expanded) {
      style = "-active";
    }
    var className = "" + this.props.extra;
    className += " collapsible-content" + style;

    return (
      <div className={className}>
        <div className="arrow"></div>
        {this.expandedContent()}
      </div>
    );
  }
};
