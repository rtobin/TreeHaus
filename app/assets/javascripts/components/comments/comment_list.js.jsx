var CommentList = React.createClass({
  getInitialState: function(){
    return {comments: CommentStore.all()};
  },

  componentWillMount: function () {
    // this.props.commentableParams = {id: #, type: "Todo"} etc
  },

  _commentsChanged: function(){
    if (this.isMounted()) {
      this.setState({comments: CommentStore.all()});
    }
    // I don't like this, but this is the best way I believe without getting messy
    ProjectUtil.fetchProject(ProjectStore.currentProjectID());
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._commentsChanged);
    if (this.isMounted()) {
      CommentUtil.fetchComments(this.props.commentableParams);
    }
  },

  componentWillUnMount: function() {
    CommentStore.removeChangeListener(this._commentsChanged);
  },

  render: function() {
    var comments = this.state.comments;
    var commentsKeys = [];
    Object.keys(comments).forEach(function (key) {
      if (parseInt(key) >= 0){
        commentsKeys.push(comments[key]);
      }
    });

    var commentsKeysSorted = commentsKeys.sort(function (comment1, comment2) {
      return new Date(comment2.created_at) - new Date(comment1.created_at);
    });

    return (
      <div className="comments-panel">
        <CommentForm commentableParams={this.props.commentableParams}/>
        <div className="comment-list">
          {
            commentsKeysSorted.map(function(comment) {
              return(
                <CommentListItem key={comment.id} comment={comment} />
              );
            })
          }
        </div>
      </div>
    );
  }
});
