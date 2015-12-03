(function (root) {
  var _comments = {};

  var setComments = function (comments) {
    _comments = $.extend({}, comments);
  };

  var addComment = function (comment) {
    _comments[comment.id] = comment;
  };

  var deleteComment = function (commentID) {
    delete _comments[commentID];
  };

  var CommentStore = root.CommentStore = $.extend({}, BaseStore, {
    // comment store is for carrying comments associated with a single component
    all: function(){
      return $.extend({}, _comments);
    },

    find: function(id) {
      return _comments[id];
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case CommentConstants.COMMENTS_RECEIVED:
          setComments(payload.comments);
          CommentStore.emitChange();
          break;
        case CommentConstants.COMMENT_CREATED:
          addComment(payload.comment);
          CommentStore.emitChange();
          break;
        case CommentConstants.COMMENT_UPDATED:
          addComment(payload.comment);
          CommentStore.emitChange();
          break;
        case CommentConstants.COMMENT_DESTROYED:
          deleteComment(payload.id);
          CommentStore.emitChange();
          break;
      }
    })
  });
})(this);
