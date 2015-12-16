var CommentsCountBubble = React.createClass({
  componentDidMount: function () {
    CommentStore.addChangeListener(this._updateNumIfNeeded);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeListener(this._updateNumIfNeeded);
  },

  _updateNumIfNeeded: function () {

    if ( this.isMounted() &&
      CommentStore.verifyCommentable(this.props.commentableParams)) {
      this.setState({numComments: CommentStore.numComments()})
    }
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({
      numComments: newProps.numComments,
      commentableParams: newProps.commentableParams
    });
  },

  getInitialState: function () {
    return {
      numComments: this.props.numComments,
      commentableParams: this.props.commentableParams
    }
  },

  render: function () {
    return (
      <div className="comments-count-bubble"
            title="Comment count">
        <small>{this.state.numComments}</small>
      </div>
    );
  }
});
