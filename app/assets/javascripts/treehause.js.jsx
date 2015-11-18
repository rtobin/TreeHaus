$(function () {
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;




  var routes = (
    <Route handler={App}>
      <Route name="signup" handler={Signup}/>
      <Route name="login" handler={Login}/>
      <Route name="home" path="/" handler={Home}/>
    </Route>
  );
  debugger
  
  var router = Router.create({routes});
  RouterContainer.set(router);

  let sessionToken = localStorage.getItem('sessionToken');
  if (sessionToken) {
    LoginActions.loginUser(sessionToken);
  }

  router.run(function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
});
