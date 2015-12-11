var CommentListItem = React.createClass({
  render: function () {
    var comment = this.props.comment;
    var author = MemberStore.find(comment.author_id);
    return (
      <article className="comment-list-item">
        <UserAvatar user={author}/>
        <header>
            <strong>{author.name}</strong>
        </header>
        <div className="comment-date">{comment.created_at_in_words}</div>
        <p>{comment.content}</p>
      </article>
    )
  }
});
