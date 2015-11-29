var TodoHeader = React.createClass({
  render: function () {
    return (
      <div className="todo-header" >
        {this.props.todo.title}
      </div>
    );
  }
});
