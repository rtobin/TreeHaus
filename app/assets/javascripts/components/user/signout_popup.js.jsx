var Signout = window.Signout = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function () {
      return {
        expanded: false
      };
  },

  toggleExpand: function (e) {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  },

  componentDidMount: function () {
    var template = '<h3>Are you sure you want to sign out?</h3>';
    template += '<button onClick={this.signout}>Signout</button>';
    $('.signout-modal').avgrund({
    	width: 380,
    	height: 100,
    	showClose: true,
    	showCloseText: 'cancel',
    	closeByEscape: true,
    	closeByDocument: true,
    	holderClass: '',
    	overlayClass: '',
    	enableStackAnimation: false,
    	onBlurContainer: '',
    	openOnEvent: true,
    	setEvent: 'click',
    	onLoad: function (elem) { },
    	onUnload: function (elem) { },
    	template: $('.signout-content')
    });
  },

  redirectAfterSignout: function () {
    this.history.pushState(null, "/projects");
  },

  signout: function (e) {
    e.preventDefault();
    AuthUtil.signout(this.redirectAfterSignout);
  },

  render: function () {
    var Link = ReactRouter.Link;
    var style = {};
    if (!this.state.expanded) {
      style.display = 'none';
    }
    return (
      <div>
        <button className="signout-modal" onClick={this.toggleExpand}>Sign out</button>
        <div className="signout-content">
          <h3>Are you sure you want to sign out?</h3>
          <button onClick={this.signout}>Signout</button>
        </div>
      </div>
    );
  }
});
