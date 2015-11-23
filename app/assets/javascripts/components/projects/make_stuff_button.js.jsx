var MakeStuffButton = React.createClass({
  onClick: function (e) {
    e.stopPropagation();
    this.props.cb();
  },

  render: function () {
    var classname = "btn btn-xs " + this.props.btnClass;
    return (
      <button
        className={classname}
        onClick={this.handleDone}>{text}</button>
    );
  }
});
