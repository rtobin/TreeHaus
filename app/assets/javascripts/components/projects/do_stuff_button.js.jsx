var DoStuffButton = React.createClass({
  onClick: function (e) {
    e.stopPropagation();
    this.props.cb();
  },

  render: function () {
    var text = this.props.text;
    var classname = "btn-make-stuff " + this.props.btnClass;
    return (
      <button
        className={classname}
        onClick={this.handleDone}>{text}</button>
    );
  }
});
