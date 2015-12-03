var StepForm = React.createClass({

  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._closeExpand);
  },

  componentWillUnMount: function () {
    ProjectStore.addStepsChangeListener(this._closeExpand);
  },

  getInitialState: function () {
    return {
      expanded: false,
      title: "",
      body: "",
      dueDate: ""
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
    var stepParams = {
      step: {
        title: this.state.title,
        body: this.state.body,
        done: false,
        due_date: this.state.dueDate,
        author_id: this.props.params.userID,
        todo_id: this.props.todo.id
      },

      todo_id: this.props.todo.id,
      project_id: this.props.params.projectID

    };
    TodoUtil.createStep(stepParams);
  },

  _expandedContent: function () {
    var expanded = ""
    if (this.state.expanded) {
      var expanded = "-expanded"
    }
    return (
      <section className={"centered new-step" + expanded}>
        <Errors />
        <form className="step-form" onSubmit={this._handleSubmit}>
          <fieldset className="step-form-fieldset">
            <div className="step-input">
              <label>
                Step Title
                <input className="form-input"
                  data-attr="title"
                  placeholder="Name this step."
                  value={this.state.title}
                  onChange={this._onFormChange} />
              </label>
            </div>

            <div className="step-input">
              <label>
                Step Body
                <textarea className="step-form-textarea"
                  data-attr="body"
                  placeholder="Add some notes for this step."
                  value={this.state.body}
                  onChange={this._onFormChange}/>
              </label>
            </div>

            <div className="step-input">
              <input type="date" name="due-date"
                data-attr="dueDate"
                onChange={this._onFormChange}
                value={this.state.dueDate}/>
            </div>

            <div className="step-submit">
              <input
                type="submit"
                className="submit-btn btn-default"
                value="Add Step"/>
              <span className="step-button-alternative">or
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
          onClick={this._toggleExpand}>Make a new Step</button>
        {this._expandedContent()}
      </div>
    );
  }
})
