var TodoForm = React.createClass({

  componentDidMount: function () {
    ProjectStore.addTodosChangeListener(this._closeExpand);
  },

  componentWillUnMount: function () {
    ProjectStore.addTodosChangeListener(this._closeExpand);
  },

  getInitialState: function () {
    return {
      expanded: false,
      title: "",
      body: ""
    };
  },

  _toggleExpand: function (e) {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  },

  _closeExpand: function () {
    this.setState({expanded: false})
  },

  _onFormChange: function (e) {
    var target = e.target;
    var attr = target.dataset.attr;
    this.state[attr] = target.value;
    this.forceUpdate();
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var todoParams = {
      title: this.state.title,
      body: this.state.body,
      done: false,
      author_id: this.props.params.userID,
      project_id: this.props.params.projectID
    };
    TodoUtil.createTodo(todoParams);
  },

  _expandedContent: function () {
    var expanded = ""
    if (this.state.expanded) {
      var expanded = "-expanded"
    }
    return (
      <section className={"centered new-todo" + expanded}>
        <Errors />
        <form className="todo-form" onSubmit={this._handleSubmit}>
          <fieldset className="todo-form-fieldset">
            <div className="todo-input">
              <label>
                Todo Title
                <input className="form-input"
                  data-attr="title"
                  placeholder="Name this todo."
                  value={this.state.title}
                  onChange={this._onFormChange} />
              </label>
            </div>

            <div className="todo-input">
              <label>
                Todo Body
                <textarea className="todo-form-textarea"
                  data-attr="body"
                  placeholder="Add some extra details about this todo."
                  value={this.state.body}
                  onChange={this._onFormChange}/>
              </label>
            </div>

            <div className="todo-submit">
              <input
                type="submit"
                className="submit-btn btn-default"
                value="Add Todo"/>
              <span className="todo-button-alternative">or
                <a onClick={this._toggleExpand}>Cancel</a>
              </span>
            </div>
          </fieldset>
        </form>
      </section>
    );
  },

  render: function () {
    return (
      <div>
        <button className="action-button"
          onClick={this._toggleExpand}>Make a new Todo</button>
        {this._expandedContent()}
      </div>
    );
  }
})
