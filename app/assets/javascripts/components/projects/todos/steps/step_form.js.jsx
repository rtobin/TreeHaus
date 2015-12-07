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
      startAt: null,
      dueAt: null
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
        start_at: this.state.startAt,
        due_at: this.state.dueAt,
        author_id: this.props.params.userID,
        todo_id: this.props.todo.id
      },

      todoID: this.props.todo.id,
      projectID: this.props.params.projectID

    };
    TodoUtil.createStep(stepParams);
  },

  _noDates: function () {
    this.setState({
      dueAt: null,
      startAt: null
    });
  },

  _onlyDueDate: function () {
    this.setState({
      dueAt: this.state.dueAt || new Date(),
      startAt: null
    });
  },

  _bothDates: function () {
    var timeNow = new Date();

    this.setState({
      dueAt: this.state.dueAt || timeNow,
      startAt: this.state.dueAt || timeNow
    });
  },

  _expandedContent: function () {
    var expanded = ""
    if (this.state.expanded) {
      var expanded = "-expanded"
    }
    var timeNow = new Date();

    return (
      <section className={"centered new-step" + expanded}>
        <form className="step-form" onSubmit={this._handleSubmit}>
          <Errors />
          <fieldset className="step-form-fieldset">
            <div className="step-input">
              <label>
                <input className="form-input"
                  data-attr="title"
                  placeholder="Name this task."
                  value={this.state.title}
                  onChange={this._onFormChange} />
              </label>
            </div>

            <div className="step-input">
              <label>
                <textarea className="step-form-textarea"
                  data-attr="body"
                  placeholder="Add some notes for this task."
                  value={this.state.body}
                  onChange={this._onFormChange}/>
              </label>
            </div>

            <div className="step-input form-radio-list">
              <label>
                <input className="step-radio"
                  type="radio" name="dates"
                  value="none"
                  checked={!(this.state.startAt || this.state.dueAt)}
                  onClick={this._noDates} />
                  No due date
              </label>
              <label>
                <input className="step-radio"
                  type="radio" name="dates" value="due"
                  checked={!this.state.startAt && !!this.state.dueAt}
                  onClick={this._onlyDueDate}/>
                  Due on
                <input className="step-datetime" type="datetime-local" name="due-datetime"
                  data-attr="dueAt"
                  onChange={this._onFormChange}
                  value={this.state.dueAt}
                  placeholder="Add a due date…"
                  min={timeNow}/>
              </label>
              <label>
                <input className="step-radio"
                  type="radio" name="dates" value="both"
                  checked={(!!this.state.startAt && !!this.state.dueAt)}
                  onClick={this._bothDates}/>
                <span>Runs from</span>
                <input className="step-datetime both-dates" type="datetime-local" name="start-datetime"
                  data-attr="startAt"
                  onChange={this._onFormChange}
                  value={this.state.startAt}
                  placeholder="Add a start date…"
                  min={timeNow}/>
                <span id="runs-to-span">to</span>
                <input className="step-datetime both-dates" type="datetime-local" name="due-datetime"
                  data-attr="dueAt"
                  onChange={this._onFormChange}
                  value={this.state.startAt ? this.state.dueAt : null}
                  placeholder="Add a due date…"
                  min={this.state.startAt}/>
              </label>
            </div>
            <div className="step-submit">
              <input
                type="submit"
                className="action-button"
                id="step-submit-button"
                value="Make new task"/>
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
        <button className="action-button add-task-btn"
          onClick={this._toggleExpand}>Add task</button>
        {this._expandedContent()}
      </div>
    );
  }
})
