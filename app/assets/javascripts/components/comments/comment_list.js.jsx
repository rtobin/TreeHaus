var CommentList = React.createClass({
  getInitialState: function(){
    return {
      comments: CommentStore.all(),
      numMembers: MemberStore.count()
    };
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

  _membersChanged: function () {
    debugger
    this.setState({ numMembers: MemberStore.count() });
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._commentsChanged);
    MemberStore.addChangeListener(this._membersChanged);
    if (this.isMounted()) {
      CommentUtil.fetchComments(this.props.commentableParams);
    }
  },

  componentWillUnMount: function() {
    CommentStore.removeChangeListener(this._commentsChanged);
    MemberStore.addChangeListener(this._membersChanged);
  },

  render: function() {
    debugger
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
              var author = MemberStore.find(comment.author_id) || {};
              if (typeof author.name !== "undefined") {
                return(
                  <CommentListItem key={comment.id} comment={comment} author={author} />
                );
              }
            })
          }
        </div>
      </div>
    );
  }
});
