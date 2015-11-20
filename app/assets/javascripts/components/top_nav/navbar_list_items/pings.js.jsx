var Pings = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">***BONUS FEATURE***</span>
        </h3>
        <ol className="stuff">
          <li className="stuff-text" href="">
            Jane: "Where is the toilet paper??!"
          </li>
          <li className="stuff-text" href="">
            Jane: "This is an emergency!!!"
          </li>
          <li className="stuff-text" href="">
            Jim: "I think Jane needs new pants..."
          </li>
        </ol>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Pings
        {this.expandableItem()}
      </div>
    );
  }
});
