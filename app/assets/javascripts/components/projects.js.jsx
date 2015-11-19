var Projects = React.createClass({

  render: function () {
    var Link = ReactRouter.Link;
        // <Sidebar />
      console.log(this.props.children);
    return (
      <div>
        <h1>Projects</h1>
        <Header />
      </div>
    );
  }
});
