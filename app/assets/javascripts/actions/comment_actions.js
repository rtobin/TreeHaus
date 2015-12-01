CommentActions = {
  commentsReceived: function (comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  commentCreated: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_CREATED,
      comment: comment
    });
  },

  commentUpdated: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_UPDATED,
      comment: comment
    });
  },

  commentDestroyed: function (commentID) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_DESTROYED,
      commentID: commentID
    });
  }
};
