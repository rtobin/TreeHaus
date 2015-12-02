var TodoIndexItem = React.createClass({
  getInitialState: function(){
    return {
      todo: this.props.todo || {},
      steps: this.props.todo.steps || {}
    };
  },

  render: function () {
    debugger
    var that = this;
    var Link = ReactRouter.Link;
    return (
      <div className="todo-index-item">
        <TodoHeader todo={this.state.todo} key={this.state.todo.id}/>
        <p>{this.state.todo.body}</p>
        <div className="step-list">
          {
            Object.keys(this.state.steps).map(function(stepID) {
              var step = that.state.steps[stepID];
              return(
                <Link to={that.props.location.pathname + "/" + step.id}
                      step={step}
                      key={step.todo_id + "_" + step.id}>
                  <StepsListItem key={step.todo_id + "_" + step.id} step={step} />
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
});
