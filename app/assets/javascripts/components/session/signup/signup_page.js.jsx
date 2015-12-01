var SignupPage = React.createClass({
  render: function () {
    return (
      <div className="signup-page">
        <SignupHeader />
        <SignupBody currentUser={this.props.currentUser} />
        <SignupFooter />
      </div>
    );
  }
});
