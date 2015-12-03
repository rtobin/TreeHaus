var CommentsCountBubble = React.createClass({
  render: function () {
    return (
      <div className="comments-count-bubble">
        <small>{this.props.numComments}</small>
      </div>
    );
  }
});
