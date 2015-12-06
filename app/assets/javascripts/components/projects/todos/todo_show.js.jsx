var TodoShow = React.createClass({

  getInitialState: function () {
    var todoID = this.props.params.todoID;
    var todos = ProjectStore.currentProject().todos || {};
    var todo = todos[todoID] || {} ;
    return { todo: todo };
  },

  render: function () {
    var that = this;
    var todo = this.state.todo;
    var steps = todo.steps || {};
    var commentableParams = {
      commentable_type: "Todo",
      commentable_id: todo.id
    };
    return (
      <div className="panel">
        <article className="todoindex recordable">
          <section className="todo-list panel-content">
            <TodoHeader todo={this.state.todo} />
            <p>{this.state.todo.body}</p>
            <div className="step-list">
              {
                Object.keys(steps).map(function(stepID) {
                  var step = steps[stepID];
                  return(
                    <StepsListItem key={that.state.todo.id + "." + step.id}
                      step={step}
                      params={that.props.params}/>
                  );
                })
              }
            </div>
          </section>
        </article>
        <CommentList commentableParams={commentableParams} projectID={this.props.params.projectID}/>
      </div>
    );
  }
});
