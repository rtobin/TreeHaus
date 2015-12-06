var HeaderNavLinks = React.createClass({
  render:function () {
    var Link = ReactRouter.Link;
    var linkPaths = this.props.linkPaths;
    var linkTitles = this.props.linkTitles;
    var output;
    if (linkPaths.length > 1) {
      return (
        <div className="nav-links">
          {"From "}
          <Link to={linkPaths[0]}>{linkTitles[0]}</Link>
          {" > "}
          <Link to={linkPaths[1]}>{linkTitles[1]}</Link>
        </div>
      );
    } else {
      return(
        <div className="nav-links">
          {"From "}
          <Link to={linkPaths[0]}>{linkTitles[0]}</Link>
        </div>
      );
    }
  }
});
