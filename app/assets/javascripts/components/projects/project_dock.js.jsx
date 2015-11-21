var ProjectDock = React.createClass({

  render: function () {
    return (
      <ul class="profile-friends group">
        <li><a href="#" className="card chats" title="Chats">
            Chat
            <ChatCard />
          </a></li>
        <li><a href="#" className="card messages" title="Messages">
            Messages
            <MessagesCard />
          </a></li>
        <li><a href="#" className="card todos" title="Todos">
            To-dos
            <ToDosCard />
          </a></li>
        <li><a href="#" className="card schedule" title="Schedule">
            Schedule
            <ScheduleCard />
          </a></li>
        <li><a href="#" className="card checkin" title="Check-ins">
            Check-ins
            <CheckInsCard />
          </a></li>
        <li><a href="#" className="card docs-files" title="Docs-Files">
            Docs & Files
            <DocsCard/>
          </a></li>
      </ul>
    )
  }
})
