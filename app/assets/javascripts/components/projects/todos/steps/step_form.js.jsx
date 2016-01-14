var StepForm = React.createClass({

  componentDidMount: function () {
    ProjectStore.addStepsChangeListener(this._closeExpand);
    $('#datetimepicker5').datetimepicker();
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });

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
      dueAt: null,
      assignees: null,
      numMembers: MemberStore.count
    };
  },

  _toggleExpand: function (e) {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
    // $('#assign-members')
    //   .bind( "keydown", function( event ) {
    //     if ( event.keyCode === $.ui.keyCode.TAB &&
    //         $( this ).autocomplete( "instance" ).menu.active ) {
    //       event.preventDefault();
    //     }
    //   })
    //   .autocomplete({
    //     source: MemberStore.emails(),
    //     autoFocus: true,
    //     token: ',',
    //     minLength: 0
    //   });

    $("#assign-members").select2( {
      data: MemberStore.emails(),
      placeholder: "add emails...",
      // theme: "classic",
      tokenSeparators: [',', ' ']
    } );
  },


  _closeExpand: function () {
    this._resetState();
  },

  _resetState: function () {
    this.setState({
      expanded: false,
      title: "",
      body: "",
      startAt: null,
      dueAt: null,
      assignees: null,
      numMembers: MemberStore.count
    });
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
      projectID: this.props.params.projectID,
      assignees: $(".select2-selection__rendered li")
                    .map( function(el) {
                      return $(this).text().slice(1)
                    })
                  .slice(0, -1).toArray().join(", ")

    };

    TodoUtil.createStep(stepParams);
    TodoUtil.fetchTodo(this.props.todo.id);
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
          <fieldset className="step-form-fieldset">
            <h3>New Task</h3>
            <Errors key="step-errors" errorid={"new-step" + expanded}/>
            <div className="step-input">
              <label>
                Title
                <input className="form-input"
                  data-attr="title"
                  placeholder="Name this task."
                  value={this.state.title}
                  autofocus="true"
                  onChange={this._onFormChange} />
              </label>
            </div>

            <div className="step-input">
              <label>
                Notes
                <textarea className="step-form-textarea"
                  data-attr="body"
                  placeholder="Add some notes..."
                  value={this.state.body}
                  onChange={this._onFormChange}/>
              </label>
            </div>
            <div className="step-input">
              <label id="assign-members-label">
                Assign to...
                <select
                  id="assign-members"
                  data-attr="assignees"
                  multiple="multiple"
                  style={{'width': '500px', 'margin': "10px"}}
                  onChange={this._onFormChange}>
                </select>
              </label>
            </div>
            <div className="step-input form-radio-list">
              <label>
                <input className="step-radio"
                  type="radio" name="dates"
                  value="none"
                  checked={!(this.state.startAt || this.state.dueAt)}
                  onChange={this._noDates} />
                <h4>No due date</h4>
              </label>
              <label>
                <input className="step-radio"
                  type="radio" name="dates" value="due"
                  checked={!this.state.startAt && !!this.state.dueAt}
                  onChange={this._onlyDueDate}/>
                <h4>Due on</h4>
                <div id="pickdate-due-on">
                <div className='col-sm-6'>
                  <div className="form-group">
                    <div className='input-group date' id='datetimepicker5'>
                      <input type='text' className="form-control"
                        data-attr="dueAt"
                        onChange={this._onFormChange}
                        value={this.state.startAt ? null : this.state.dueAt}
                        placeholder="Add a due date…"
                        min={timeNow}/>
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                      </span>
                    </div>
                  </div>
                </div>
                </div>
              </label>
              <label>
                <input className="step-radio"
                  type="radio" name="dates" value="both"
                  checked={(!!this.state.startAt && !!this.state.dueAt)}
                  onChange={this._bothDates}/>
                <h4>Runs from</h4>

                <div id="pickdates-start-at">
                  <div className='col-md-5'>
                    <div className="form-group">
                      <div className='input-group date' id='datetimepicker6'>
                        <input type='text' className="form-control"
                          data-attr="startAt"
                          onChange={this._onFormChange}
                          value={this.state.startAt}
                          placeholder="Add a start date…"
                          min={timeNow}/>
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="pickdates-due-at">
                  <div className='col-md-5'>
                    <div className="form-group">
                      <div className='input-group date' id='datetimepicker7'>
                        <input type='text' className="form-control"
                          data-attr="dueAt"
                          onChange={this._onFormChange}
                          value={this.state.startAt ? this.state.dueAt : null}
                          placeholder="Add a due date…"
                          min={this.state.startAt}/>
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className="step-submit">
              <input
                type="submit"
                className="action-button"
                id="step-submit-button"
                value="Make new task"/>
              <span className="submit-button-alternative">or
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
      <div className="add-new-step">
        <button className="action-button add-task-btn"
          onClick={this._toggleExpand}>Add task</button>
        {this._expandedContent()}
      </div>
    );
  }
})
