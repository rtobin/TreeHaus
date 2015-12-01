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
    debugger
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  },

  _closeExpand: function () {
    debugger
    this.setState({expanded: false})
  },

  _onFormChange: function () {
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
      author_id: UserStore.currentUser().id,
      project_id: ProjectStore.currentProject().id
    };
    TodoUtil.createTodo(todoParams);
    debugger
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
          <input className="form-input"
            data-attr="title"
            placeholder="Name this todo."
            value={this.state.title}
            onChange={this._onFormChange}/>

          <textarea className="form-textarea"
            data-attr="body"
            placeholder="Add some extra details about this todo."
            value={this.state.body}
            onChange={this._onFormChange}/>

          <input
            type="submit"
            className="submit-btn btn-default"/>
          <a onClick={this._toggleExpand}>Cancel</a>
        </form>
      </section>
    );
  },

  render: function () {
    return (
      <div className="">
        <button className="btn-default"
          onClick={this._toggleExpand}>Make a new Todo</button>
        {this._expandedContent()}
      </div>
    );
  }
})
