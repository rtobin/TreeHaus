var CommentListItem = React.createClass({
  render: function () {
    var comment = this.props.comment;
    return (
      <article className="comment-list-item">
        <UserAvatar user={comment.author}/>
        <header>
            <strong>{comment.author.name}</strong>
        </header>
        <div className="comment-date">{comment.created_at_in_words}</div>
        <p>{comment.content}</p>
      </article>
    )
  }
});
