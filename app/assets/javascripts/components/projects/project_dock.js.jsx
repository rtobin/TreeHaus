var ProjectDock = React.createClass({

  render: function () {
    debugger
    var projectPath =this.props.location.pathname;
    return (
      <div className="project-dock">
        <ul className="dock-cards group">
          <li><ChatsCard projectpath={projectPath}/></li>
          <li><MessagesCard projectpath={projectPath}/></li>
          <li><ToDosCard projectpath={projectPath}/></li>
          <li><SchedulesCard projectpath={projectPath}/></li>
          <li><CheckInsCard projectpath={projectPath}/></li>
          <li><DocsCard projectpath={projectPath}/></li>
        </ul>
    </div>
    );
  }
});
