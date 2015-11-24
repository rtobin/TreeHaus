var DocsCard = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    
    return (
      <Link to={""}>
        <div className="dock-card docs-card">
          <h3 className="card-heading">
            <span>Docs</span>
          </h3>
        </div>
      </Link>
    );
  }
});
