$(function () {
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;





  // let sessionToken = localStorage.getItem('sessionToken');
  // if (sessionToken) {
  //   LoginActions.loginUser(sessionToken);
  // }
  var requireAuth = function (nextState, replaceState) {
    if (!UserStore.isLoggedIn()){
      console.log("Nope!");
      debugger
      replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  };

  var routes = (
    <Route path="/" component={App} >
      <Route path="projects" component={Projects} onEnter={requireAuth}/>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
      <Route path="logout" component={Logout}/>
    </Route>
  );

  React.render(<Router>{routes}</Router>, document.getElementById('content'));
  // var router = Router.create({routes});
  // RouterContainer.set(router);
  //
  // router.run(function (Handler) {
  //   React.render(<Handler />, document.getElementById('content'));
  // });
});
