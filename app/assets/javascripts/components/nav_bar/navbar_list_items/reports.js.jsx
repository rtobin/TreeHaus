var Reports = React.createClass({
  mixins: [ClickExpandable],


  expandedContent: function () {
    return (
      <div className="topnav-menu-trigger topnav-menu-trigger-admin">
        <h3 className="topnav-menu-heading">
          <span className="top">***BONUS FEATURE***</span>
        </h3>
        <h3 className="topnav-menu-heading">
          <span className="top">RUN A REPORT</span>
        </h3>
        <ul className="stuff">
          <li className="stuff-text" href="">
            <a href="">What's overdue?</a>
          </li>
          <li className="stuff-text" href="">
            <a href="">What's coming up or due soon?</a>
          </li>
          <li className="stuff-text" href="">
            <a href="">What's new to-do and what's to-done?</a>
          </li>
          <li className="stuff-text" href="">
            <a href="">What's on everyone's plate?</a>
          </li>
          <li className="stuff-text" href="">
            <a href="">What has someone been up to?</a>
          </li>
        </ul>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.selector}
        onClick={this.toggleExpand}>
        Reports
        {this.expandableItem()}
      </div>
    );
  }
});
