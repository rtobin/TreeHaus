var Errors = window.Errors = React.createClass ({
  getInitialState: function () {
    return {
      errors: ErrorsStore.fetchErrors() || []
    };
  },

  updateErrors: function () {
    var errors = ErrorsStore.fetchErrors();
    this.setState({errors: errors});
  },

  componentDidMount: function () {
    ErrorsStore.addChangeListener(this.updateErrors);
  },

  componentWillUnmount: function () {
    ErrorsStore.eraseErrors();
    ErrorsStore.removeChangeListener(this.updateErrors);
  },

  render: function () {
    return (

      <ul className="error-list">
        {
          this.state.errors.map(function(errMsg, idx){
            return (<li key={idx}>{errMsg}</li>);
          })
        }
      </ul>
    );
  }
});
