var CommentList = React.createClass({
  getInitialState: function(){
    return {comments: CommentStore.all()};
  },

  _commentsChanged: function(){
    this.setState({comments: CommentStore.all()});
  },

  componentDidMount: function() {
    CommentStore.addChangedHandler(this._commentsChanged);
    CommentStore.fetch();
  },

  render: function() {
    var comments = this.state.comments;
    return (
      <div className="Commentlist">
        <div className="comment-list">
          {
            comments.map(function(comment) {
              return(
                <CommentListItem key={comment.id} comment={comment} />
              );
            })
          }
        </div>
        <CommentForm />
      </div>
    );
  }
});
