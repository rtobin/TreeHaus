var CommentsCountBubble = React.createClass({
  componentDidMount: function () {
    CommentStore.addChangeListener(this._updateNumIfNeeded);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeListener(this._updateNumIfNeeded);
  },

  _updateNumIfNeeded: function () {
    if (CommentStore.verifyCommentable(this.props.commentableParams)) {
      this.setState({numComments: CommentStore.numComments()})
    }
  },

  getInitialState: function () {
    return {
      numComments: this.props.numComments
    }
  },

  render: function () {
    return (
      <div className="comments-count-bubble">
        <small>{this.state.numComments}</small>
      </div>
    );
  }
});
