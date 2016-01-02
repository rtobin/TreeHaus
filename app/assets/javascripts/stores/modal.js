(function (root) {
  _params = {
    question: "",
    yesCallback: "",
    display: "",
    redirectURL: ""
  }

  var makeModal = function (question, yesCallback, redirectURL) {
    _params.question = question;
    _params.yesCallback = yesCallback;
    _params.display = "is-open";
    _params.redirectURL = redirectURL;
  };

  var closeModal = function () {
    _params.question = "";
    _params.yesCallback = "";
    _params.display = "";
    _params.redirectURL = "";
  };

  var ModalStore = root.ModalStore = $.extend({}, BaseStore, {

    params: function () {
      return _params;
    },

    dispatcherID: AppDispatcher.register( function (payload){
      switch(payload.actionType){
        case "ACTIVATE_MODAL":
          makeModal(payload.question, payload.yesCallback, payload.redirectURL);
          ModalStore.emitChange();
          break;
        case "DEACTIVATE_MODAL":
          closeModal();
          ModalStore.emitChange();
          break;
        default:
          break;
      }
    })
  });
})(this);
