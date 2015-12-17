var AssignmentsIndex = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div className="assignments-index">
        <h3 className="assignments-index-heading">
          <span className="top">Projects</span>
        </h3>
        <div className="assignments-index-table">
          <table className="project-links-list group">
            <tr><th>Title</th><th>Project</th></tr>
            {this.projectLinksList()}
          </table>
        </div>
      </div>
    );
  }

})
