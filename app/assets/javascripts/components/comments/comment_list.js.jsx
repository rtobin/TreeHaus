var CommentList = React.createClass({
  getInitialState: function(){
    return {comments: CommentStore.all()};
  },

  componentWillMount: function () {
    // this.props.commentableParams = {id: #, type: "Todo"} etc
    CommentUtil.fetchComments(this.props.commentableParams);
  },

  _commentsChanged: function(){
    this.setState({comments: CommentStore.all()});
  },

  componentDidMount: function() {
    CommentStore.addChangedHandler(this._commentsChanged);
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
