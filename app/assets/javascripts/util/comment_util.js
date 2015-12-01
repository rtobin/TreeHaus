CommentUtil = {
  fetchComments: function(commentableParams) {
    $.ajax({
      url: "api/comments",
      data: {
        commentable_id: commentableParams.id,
        commentable_type: commentableParams.type
      },
      success: function(comments) {
        CommentActions.receiveAll(comments);
      }
    });
  },

  createComment: function (commentParams) {
    $.post('api/comments',
      {comment: commentParams.comment},
      function(comment) {
        CommentActions.commentCreated(commentParams.projectID, comment);
      }
    ).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  updateComment: function (commentParams) {
    $.ajax ({
      type: 'PUT',
      url: 'api/comments/' + commentParams.id,
      data: {
        id: commentParams.id,
        comment: commentParams
      },
      success: function (comment) {
        CommentActions.commentUpdated(commentParams.projectID, comment);
      }
    }).fail(function () {
        var args = [].slice.call(arguments);
        UIActions.errorReport(JSON.parse(args[0].responseText));
      }
    );
  },

  destroyComment: function (commentParams) {
    $.ajax ({
      type: 'DELETE',
      url: 'api/comments/' + commentParams.id,
      data: {id: commentParams.id},
      success: function () {
        CommentActions.commentDestroyed(commentParams.projectID, commentParams.id);
      }
    });
  }


};
