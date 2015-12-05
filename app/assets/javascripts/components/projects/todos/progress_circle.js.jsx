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

  componentDidMount: function () {
    var endIdx = Math.floor(this.props.progressNum * (redsToGreens.length-1));
    var startColor = redsToGreens[0];
    var endColor = redsToGreens[endIdx];
    var that = this;
    var trailColor = endIdx === 0 ? startColor : '#aaa'

    var element = document.getElementById(that.props.progressID);
    var circle = new ProgressBar.Circle(element, {
        color: '#000',
        trailColor: trailColor,
        trailWidth: 15,
        duration: 5000,
        easing: 'bounce',
        strokeWidth: 15,
        text: {
          value: that.props.progressStr
        },

        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    circle.animate(this.props.progressNum, {
        from: {color: startColor, width: 15},
        to: {color: endColor, width: 15}
    });
  },

  render: function () {
    return (
      <div className="progress-circle" id={this.props.progressID}>
      </div>
    )
  }
});
