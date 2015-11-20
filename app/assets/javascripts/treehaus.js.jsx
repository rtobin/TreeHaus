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
      <Route path="projects" component={ProjectsIndex} onEnter={requireAuth}>
        <Route path=":id" component={ProjectHome} onEnter={requireAuth}>
          <Route path="logout" component={Logout} />
        </Route>
      </Route>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
      <Route path="logout" component={Logout}/>
    </Route>
  );

  React.render(<Router>{routes}</Router>, document.getElementById('content'));

  // <Route path="todos" component={TodosIndex} onEnter={requireAuth}>
  //   <Route path=":id" component={Todo} onEnter={requireAuth}>
  //     <Route path="steps" component={StepsIndex} onEnter={requireAuth}>
  //       <Route path=":id" component={Step} onEnter={requireAuth}/>
  //     </Route>
  //   </Route>
  // </Route>
  // });
});
