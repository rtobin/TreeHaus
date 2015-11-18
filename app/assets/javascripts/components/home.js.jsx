var HomeUnWrapped = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
});

var Home = authenticatedComponent(HomeUnWrapped);
