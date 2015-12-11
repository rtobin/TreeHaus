(function (root) {
  var _comments = {};
  var _commentableParams = {
    type: "",
    id: -1
  };

  var setCommentableParams = function (params) {
    _commentableParams = {
      type: params.type || _commentableParams.type,
      id: params.id || _commentableParams.id
    }
  };

  var setComments = function (comments) {
    _comments = $.extend({}, comments);
    var firstComment = _comments[0] || {};
    var params = {
      type: firstComment.commentable_type,
      id: firstComment.commentable_id
    };
    setCommentableParams(params);
  };

  var addComment = function (comment) {
    _comments[comment.id] = comment;
  };


  var deleteComment = function (commentID) {
    delete _comments[commentID];
  };

  var CommentStore = root.CommentStore = $.extend({}, BaseStore, {
    // comment store is for carrying comments associated with a single component
    verifyCommentable: function (params) {
      return params.type === _commentableParams.type && params.id === _commentableParams.id;
    },

    all: function(){
      return $.extend({}, _comments);
    },

    clearComments: function () {
      _comments = {};
    },

    numComments: function () {
      return Object.keys(_comments).length;
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
