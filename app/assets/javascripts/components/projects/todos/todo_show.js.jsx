var TodoShow = React.createClass({
  render: function () {
    var that = this;
    var todos = ProjectStore.currentProject().todos || {};
    var todo = todos[this.props.params.todoID] || {};
    var steps = todo.steps || {};
    var commentableParams = {
      commentable_type: "Todo",
      commentable_id: todo.id
    };
    var navlinkTitles = ["Goals"];
    var navlinkPaths = [
      this.props.params.userID + "/projects/" + this.props.params.projectID + "/todos"
    ];

    return (
      <div className="panel">
        <article className="todo-show recordable">
          <HeaderNavLinks linkPaths={navlinkPaths} linkTitles={navlinkTitles}/>
          <section className="todo-list panel-content">
            <TodoHeader todo={todo} />
            <p>{todo.body}</p>
            <StepForm params={this.props.params} todo={todo}/>
            <div className="step-list">
              {
                Object.keys(steps).map(function(stepID) {
                  var step = steps[stepID];
                  return(
                    <StepsListItem key={todo.id + "." + step.id}
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
