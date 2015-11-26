$(function () {
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  // var requireSigninAsUser = function (nextState, replaceState) {
  //   if (!UserStore.isSignedIn() || UserStore.currentUser().id !== parseInt(nextState.params.userID)) {
  //     replaceState({
  //       nextPathname: nextState.location.pathname
  //     }, '/signin');
  //   }
  // };

  // var requireSignedinUserProject = function (nextState, replaceState) {
  //   requireSigninAsUser(nextState, replaceState);
  //   if (!UserStore.isSignedIn() || UserStore.currentUser().id !== this.props.userID) {
  //     var projects = UserStore.currentUser().projects;
  //     if (projects.indexOf(this.props.projectID) >= 0) {
  //       // send projects to Projectstore and wait til they receive, then redirect
  //       ProjectStore.addProjectsListChangeListener(function () {
  //         pushState(null, )
  //       })
  //       ProjectActions.receiveProjects(projects);
  //     }
  //   }
  // };

  var redirectToUserPage = function (nextState, replaceState) {
    if (UserStore.isSignedIn()) {
      replaceState(null, '/' + UserStore.currentUser().id);
    }
  };

  // routes = [
  //   { component: App,
  //     childRoutes: [
  //       { path: '/signout', component: Signout },
  //       { path: '/signin', component: Signin },
  //       // { path: '/about', component: About},
  //       { onEnter: redirectToUserPage,
  //         childRoutes: [
  //           // Unauthenticated routes
  //           // Redirect to projects if user is already logged in
  //           { path: '/signin', component: Signin},
  //           { path: '/signup', component: Signup},
  //           // ...
  //         ]
  //       },
  //       { onEnter: redirectToSignin,
  //         childRoutes: [
  //           // Protected routes
  //           { path: 'users/:id', component: UserPage},
  //           // ...
  //         ]
  //       }
  //     ],
  //
  //   }
  // ];
  // React.render(<Router routes={routes} />, document.getElementById('content'));

  var routes = (
      <Route path="/" component={App} >
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route
          path=":userID/projects"
          component={ProjectsHome}>
          <IndexRoute component={ProjectsIndex}/>
          <Route path="new" component={NewProjectForm}/>
          <Route path=":projectID" component={ProjectPage}>
            <Route path="todos" component={TodosIndex}/>
            <Route path="update" component={UpdateProjectForm}/>
          </Route>
          <Route path="signout" component={Signout} />

        </Route>

        <Route path="signout" component={Signout}/>
      </Route>
    );

    React.render(<Router>{routes}</Router>, document.getElementById('content'));
  // router.run(routes, function (Handler) {
  //   React.render(<Handler />, document.getElementById('content'));
  // });

  // <Route path="todos" component={TodosIndex} onEnter={requireAuth}>
  //   <Route path=":id" component={Todo} onEnter={requireAuth}>
  //     <Route path="steps" component={StepsIndex} onEnter={requireAuth}>
  //       <Route path=":id" component={Step} onEnter={requireAuth}/>
  //     </Route>
  //   </Route>
  // </Route>
  // });
});
