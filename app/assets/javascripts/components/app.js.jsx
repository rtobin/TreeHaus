'use strict';

var App = React.createClass({

  getInitialState: function () {
      return { loggedIn: this.getlogInState() };
  },

  _getLoginState: function () {
    return { loggedIn: LoginStore.isLoggedIn() };
  },

  _onChange: function () {
    this.setState(this.getlogInState());
  },

  componentDidMount: function () {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  },

  componentWillUnMount: function () {
    LoginStore.removeChangeListener(this.changeListener);
  },

  render: function(){
    if (this.state.loggedIn){
      return <Home />
    } else {
      return <Login />
    }
  }
});
