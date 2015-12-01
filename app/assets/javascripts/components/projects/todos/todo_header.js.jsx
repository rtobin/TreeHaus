var TodoHeader = React.createClass({
  render: function () {
    return (
      <header className="todo-header" >
        {this.props.todo.title}
      </header>
    );
  }
});
