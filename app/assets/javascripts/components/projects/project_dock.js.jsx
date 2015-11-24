var ProjectDock = React.createClass({

  render: function () {
    return (
      <div className="project-dock">
        <ul className="dock-cards group">
          <li><ChatsCard /></li>
          <li><MessagesCard /></li>
          <li><ToDosCard /></li>
          <li><SchedulesCard /></li>
          <li><CheckInsCard /></li>
          <li><DocsCard /></li>
        </ul>
    </div>
    );
  }
});
