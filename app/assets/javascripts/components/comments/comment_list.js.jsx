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
    // I don't like this, but this is the best way I believe without getting messy
    ProjectUtil.fetchProject(ProjectStore.currentProjectID());
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._commentsChanged);
  },

  componentWillUnMount: function() {
    CommentStore.removeChangeListener(this._commentsChanged);
  },

  render: function() {
    var comments = this.state.comments;
    return (
      <div className="comments-panel">
        <div className="comment-list">
          {
            Object.keys(comments).map(function(commentID) {
              var comment = comments[commentID];
              return(
                <CommentListItem key={commentID} comment={comment} />
              );
            })
          }
        </div>
        <CommentForm commentableParams={this.props.commentableParams}/>
      </div>
    );
  }
});
