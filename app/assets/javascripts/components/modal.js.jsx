var Modal = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {
      question: "",
      yesCallback: null,
      display: "",
      redirectURL: ""
    }
  },

  componentDidMount: function () {
    ModalStore.addChangeListener(this._updateModal);
  },

  componentWillUnMount: function () {
    ModalStore.removeChangeListener(this._updateModal);
  },

  _updateModal: function () {
    var params = ModalStore.params();
    this.setState({
      question: params.question,
      yesCallback: params.yesCallback,
      display: params.display,
      redirectURL: params.redirectURL
    });
  },

  _envokeCallback: function (e) {
    e.preventDefault();
    this.state.yesCallback();
    ModalActions.deactivateModal();
    this.history.pushState(null, this.state.redirectURL);
  },

  render: function () {
    // var display = this.state.display === "" ? "" : " " + this.state.display;

    return (
      <div className={"ambiguous-modal" +" "+ this.state.display }>
        <form className="modal-panel">
          <span className="modal-close ambiguous-modal-close">&times;</span>
          <p>
            <strong>{UserStore.currentUserName()}</strong>,
            {" " + this.state.question}
          </p>
          <div className="submit">
            <button className="action-button"
              onClick={this._envokeCallback}>
              Yes
            </button>
            <span className="button-alternative">
              <strong className="ambiguous-modal-close">
                <small>Cancel</small>
              </strong>
            </span>
          </div>
        </form>
        <div className="modal-screen ambiguous-modal-close"></div>
      </div>
    )
  }
});
