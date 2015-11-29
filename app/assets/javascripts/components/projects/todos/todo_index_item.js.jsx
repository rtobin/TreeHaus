var TodoIndexItem = React.createClass({
  getInitialState: function(){
    return {
      todo: this.props.todo,
      steps: this.props.todo.steps || {}
    };
  },

  render: function () {
    var that = this;
    return (
      <div className="todo-item-index">
        <TodoHeader todo={this.state.todo} key={this.state.todo.id}/>
        <div className="step-list">
          {
            Object.keys(this.state.steps).map(function(stepID) {
              var step = that.state.steps[stepID];
              return(
                <StepsListItem key={step.todo_id + "_" + step.id} step={step} />
              );
            })
          }
        </div>
      </div>
    );
  }
});
