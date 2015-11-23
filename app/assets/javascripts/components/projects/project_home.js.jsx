var ProjectsHome = React.createClass({
  componentWillMount: function () {

  },


  getInitialState: function () {
    return {
      project: {}
    };
  },

  render: function () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});
