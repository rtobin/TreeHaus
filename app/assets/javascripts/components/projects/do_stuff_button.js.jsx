var DoStuffButton = React.createClass({
  onClick: function (e) {
    e.stopPropagation();
    this.props.cb();
  },

  render: function () {
    var classname = "btn-make-stuff " + this.props.btnClass;
    var text = this.props.text;
    return (
      <button
        className={classname}
        onClick={this.handleDone}>{text}</button>
    );
  }
});
