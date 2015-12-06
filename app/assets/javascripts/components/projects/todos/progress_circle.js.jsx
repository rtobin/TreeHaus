var redsToGreens = [
  "#FF0000",
  "#FF1100",
  "#FF2200",
  "#FF3300",
  "#FF4400",
  "#FF5500",
  "#FF6600",
  "#FF7700",
  "#FF8800",
  "#FF9900",
  "#FFAA00",
  "#FFBB00",
  "#FFCC00",
  "#FFDD00",
  "#FFEE00",
  "#FFFF00",
  "#EEFF00",
  "#DDFF00",
  "#CCFF00",
  "#BBFF00",
  "#AAFF00",
  "#99FF00",
  "#88FF00",
  "#77FF00",
  "#66FF00",
  "#55FF00",
  "#44FF00",
  "#33FF00",
  "#22FF00",
  "#11FF00",
  "#00FF00"
];

var ProgressCircle = React.createClass({
  componentWillReceiveProps: function (nextProps) {
    var endIdx = Math.floor(nextProps.progressNum * (redsToGreens.length-1));

    this.setState({
      progressNum: nextProps.progressNum,
      progressStr: nextProps.progressStr,
      endColor: redsToGreens[endIdx]
    });
    this.makeProgressCircle(this.state.circle);
  },

  getInitialState: function () {
    var endIdx = Math.floor(this.props.progressNum * (redsToGreens.length-1));
    var startColor = redsToGreens[0];
    var endColor = redsToGreens[endIdx];

    return {
      circle: {},
      startColor: startColor,
      endColor: endColor,
      progressNum: this.props.progressNum,
      progressStr: this.props.progressStr
    }
  },

  makeProgressCircle: function (circle) {
    circle.animate(this.state.progressNum, {
        from: {color: this.state.startColor, width: 15},
        to: {color: this.state.endColor, width: 15},

    });
    circle.setText(this.state.progressStr)
  },

  componentDidMount: function () {
    var trailColor = this.state.endIdx === 0 ? this.state.startColor : '#aaa'

    var element = document.getElementById(this.props.progressID);
    var circle = new ProgressBar.Circle(element, {
        color: '#000',
        trailColor: trailColor,
        trailWidth: 15,
        duration: 5000,
        easing: 'bounce',
        strokeWidth: 15,


        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });
    this.setState({circle: circle})
    this.makeProgressCircle(circle);
  },


  render: function () {
    return (
      <div className="progress-circle" id={this.props.progressID}>
      </div>
    )
  }
});
