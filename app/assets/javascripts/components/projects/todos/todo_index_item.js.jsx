var TodoIndexItem = React.createClass({
  getInitialState: function(){
    return {
      todoID: this.props.todoid,
      todo: this.props.todo
    };
  },

  render: function () {
    var that = this;
    return (
      <div className="todo-item-index">
        <TodoHeader todo={this.state.todo} todoid={this.state.todoID}/>
        <ul className="step-list">
          {
            Object.keys(this.state.todo.steps).map(function(stepID) {
              var step = that.state.todo.steps[stepID];
              return(
                <li><StepsListItem key={that.state.todoID + "_" + stepID}
                                  todoID={that.state.todoID}
                                  stepID={that.state.stepID}
                                  step={step} /></li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});
