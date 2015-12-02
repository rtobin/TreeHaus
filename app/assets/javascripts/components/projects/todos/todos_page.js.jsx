var TodosPage = React.createClass({
  getInitialState: function () {
    return {
      todos: ProjectStore.currentProject().todos || {},
      location: this.props.location
    }
  },

  componentDidMount: function () {
    ProjectStore.addTodosChangeListener(this._updateTodos);
  },

  componentWillUnMount: function () {
    ProjectStore.addTodosChangeListener(this._updateTodos);
  },

  _updateTodos: function () {
    this.setState({todos: ProjectStore.currentProject().todos || {}})
  },

  render: function () {
    var renderedChildren = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);
    return (
      <div>
        {renderedChildren}
      </div>
    )
  }
});
