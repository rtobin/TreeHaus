var TodosPage = React.createClass({
  getInitialState: function () {
    return {
      project: this.props.project,
      currentUser: this.props.currentUser,
      todos: this.props.project.todos || {},
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
    this.setState({
      project: ProjectStore.currentProject(),
      todos: ProjectStore.currentProject().todos || {}
    })
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
