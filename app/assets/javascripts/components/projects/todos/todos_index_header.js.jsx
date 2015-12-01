var TodosIndexHeader = React.createClass({
  render: function () {
    return (
      <div className="panel-header">
        <h1>To-dos</h1>
        <div className="progress-todos">
          <span>{}/{}</span>
        </div>
      </div>
    );
  }
});
