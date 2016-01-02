var Errors = window.Errors = React.createClass ({
  getInitialState: function () {
    var errors = ErrorsStore.fetchErrors(this.props.errorid);
    return {
      errors: errors || []
    };
  },

  componentWillReceiveProps: function (newProps) {
    ErrorsStore.eraseErrors(this.props.errorid);
    this.setState({
      errors: ErrorsStore.fetchErrors(newProps.errorid) || []
    });
  },

  updateErrors: function () {
    var errors = ErrorsStore.fetchErrors(this.props.errorid) || [];
    this.setState({errors: errors});
  },

  componentDidMount: function () {
    ErrorsStore.addChangeListener(this.updateErrors);
    ErrorsStore.eraseErrors(this.props.errorid);
  },

  componentWillUnmount: function () {
    ErrorsStore.eraseErrors(this.props.errorid);
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
