var CommentListItem = React.createClass({
  render: function () {
    var comment = this.props.comment;
    return (
      <article>
        <header>
          <span>
            <strong>{comment.author.name}</strong>
            {comment.author.title}
          </span>
        </header>
        <p>{comment.content}</p>
        <div>{comment.created_at}</div>
      </article>
    )
  }
});
