var SignoutModal = React.createClass({
  mixins: [ReactRouter.History],

  _signOutUser: function (e) {
    SessionUtil.signout();
    this.history.pushState(null, "/signin");
  },

  render: function () {
    return (
      <div className="signout-modal">
        <form className="modal-panel">

          <span className="modal-close signout-modal-close">&times;</span>

          <p><strong>{UserStore.currentUserName()}</strong>,
            are you sure you want to sign out?</p>


          <div className="submit">
            <button className="action-button"
              onClick={this._signOutUser}>
              Yes, sign out now
            </button>

            <span className="button-alternative">
              <strong className="signout-modal-close">
                <small>Cancel</small>
              </strong>
            </span>
          </div>

        </form>
        <div className="modal-screen signout-modal-close"></div>
      </div>
    )
  }
});
