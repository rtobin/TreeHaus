var StepsListItem = React.createClass({
  render: function () {
    var Link = ReactRouter.Link;
    var step = this.props.step;
    var stepURL = this.props.params.userID + "/projects/";
    stepURL += this.props.params.projectID  + "/steps/" + step.id;
    var checkboxState = step.done ? "-checked" : "-unchecked";
    var commentableParams = {type: "Step", id: step.id};
    return (
      <li className="step-list-item indent">
        <div className="step-drag-handle"></div>
        <div className="step-checkbox">
          <span className="step-checkbox-content">
            <Link to={stepURL} >
              <div className={"inert-checkbox checkbox" + checkboxState}></div>
              {step.title}
            </Link>
            <CommentsCountBubble
              commentableParams={commentableParams}
              numComments={step.num_comments} />

          </span>
        </div>
      </li>
    );
  }
});
