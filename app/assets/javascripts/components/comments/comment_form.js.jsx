var CommentForm = React.createClass({

  getInitialState: function () {
    return {
      content: ""
    };
  },

  _onCommentChange: function (e) {
    var target = e.target;
    var attr = target.dataset.attr;
    this.setState({content: target.value});
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var commentParams = {
      projectID: this.props.projectID,
      comment: {
        content: this.state.content,
        author_id: UserStore.currentUser().id,
        commentable_type: this.props.commentableParams.commentable_type,
        commentable_id: this.props.commentableParams.commentable_id
      }
    };

    CommentUtil.createComment(commentParams);
    this.setState({content: ""});
  },

  render: function () {
    return (
      <section className="centered new-comment">
        <Errors />
        <form className="comment-form" onSubmit={this._handleSubmit}>
          <fieldset className="comment-form-fieldset">
            <div className="comment-input">
              <label>
                <textarea className="todo-form-textarea"
                  data-attr="content"
                  placeholder="Add a comment..."
                  value={this.state.content}
                  onChange={this._onCommentChange}/>
              </label>
            </div>

            <div className="todo-submit">
              <input
                type="submit"
                className="submit-btn btn-default"
                value="Leave Comment"/>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
})
