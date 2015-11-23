var ProjectDependent = {
  componentWillMount: function () {
    this.changeProject();
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.changeProject);
  },

  componentWillUnMount: function () {
    ProjectStore.removeChangeListener(this.changeProject);
  },

  getCurrentProject: function () {
    return ProjectStore.currentProject();
  },

  changeProject: function () {
    this.setState({ project: this.getCurrentProject() });
  }
};
