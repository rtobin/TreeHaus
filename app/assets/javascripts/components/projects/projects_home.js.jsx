var ProjectsHome = React.createClass({

  componentDidMount: function () {
    UserStore.addChangeListener(this._update)
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this._update)
  },

  _update: function () {
    var user = UserStore.currentUser();

    this.setState({
      user:  user,
      projects: ProjectStore.all(),
      currentProject: ProjectStore.currentProject()

    });
  },

  render: function () {
    return (
      <div className="home">
        <Navbar location={this.props.location}/>
        {this.props.children}
        <SignoutModal />
      </div>
    );
  }
});
