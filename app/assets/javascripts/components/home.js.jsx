var Home = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
        // <Header />
        // <Sidebar />
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});
