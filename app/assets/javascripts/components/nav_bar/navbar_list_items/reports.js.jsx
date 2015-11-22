var Reports = React.createClass({
  mixins: [ClickExpandable],

  getInitialState: function () {
    return {
      dropdownSelectorId: randString(16),
      dropdownExpanded: false
    }
  },

  expandedContent: function () {
    return (
      <div className="chats nav-menu nav-menu-scroll">
        <h3 className="nav-menu-heading">
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
        <h3 className="nav-menu-heading">
          <span className="bonus">***BONUS FEATURE***</span>
        </h3>
      </div>
    );
  },

  render: function () {
    return (
      <div id={this.state.dropdownSelectorId}
        onClick={this.toggleExpand}>
        Reports
        {this.expandableItem()}
      </div>
    );
  }
});
