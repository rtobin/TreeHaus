ModalActions = {
  activateModal: function (question, yesCallback, redirectURL) {
    AppDispatcher.dispatch({
      actionType: "ACTIVATE_MODAL",
      question: question,
      yesCallback: yesCallback,
      redirectURL: redirectURL
    });
  },

  deactivateModal: function () {
    AppDispatcher.dispatch({
      actionType: "DEACTIVATE_MODAL"
    });
  }
}
