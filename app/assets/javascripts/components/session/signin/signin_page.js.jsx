var SigninPage = React.createClass({
  render: function () {

    return (
      <div className="signin-page">
        <SigninHeader />
        <SigninBody currentUser={this.props.currentUser} />
        <SigninFooter />
      </div>
    );
  }
});
