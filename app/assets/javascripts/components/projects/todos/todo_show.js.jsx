var TodoShow = React.createClass({

  render: function () {
    var that = this;
    var todo = this.props.todo;
    return (
      <div className="panel">
        <article className="todoindex recordable">
          <section className="todo-list panel-content">
            <TodoIndexItem key={todo.id} todo={todo} />
          </section>
        </article>
      </div>
    );
  }
});
