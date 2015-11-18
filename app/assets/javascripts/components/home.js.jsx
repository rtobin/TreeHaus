var HomeUnWrapped = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
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
