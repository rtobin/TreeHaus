'use strict';

var App = React.createClass({

  getInitialState: function () {
      return this._getLoginState();
  },

  _getLoginState: function () {
    return  { loggedIn: UserStore.isLoggedIn() };
  },

  _onChange: function () {
    this.setState(this._getLoginState());
  },

  componentDidMount: function () {
    this.changeListener = this._onChange.bind(this);
    UserStore.addChangeListener(this.changeListener);
  },

  componentWillUnMount: function () {
    UserStore.removeChangeListener(this.changeListener);
  },

  render: function () {
    if (this.state.loggedIn){
      return <Home />
    } else {
      return <Login />
    }
  }
});
