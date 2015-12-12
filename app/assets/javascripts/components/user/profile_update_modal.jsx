ProfileUpdateModal = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function(){
    return this._resetFormValues();
  },

  _onFormChange: function(e) {
    var target = e.target;
    var attr = target.dataset.attr;
    this.state[attr] = target.value;
    this.forceUpdate();
  },

  _resetFormValues: function () {
    var user = UserStore.currentUser();
    return {
      userID: this.props.params.userID,
      name: UserStore.currentUserName(),
      title: user.title,
      email: user.email,
      avatarImageUrl: user.avatar_url,
      avatarImageFile: null
    };
  },

  _handleCancel: function () {
    this.setState(this._resetFormValues());
    this.history.pushState(null, this.state.userID + "/projects");
  },

  _changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ avatarImageUrl: reader.result, avatarImageFile: file });
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ avatarImageUrl: "", avatarImageFile: null });
    }
  },

  _handleSubmit: function(e) {
    e.preventDefault();

    var title = this.state.title;
    var email = this.state.email;
    var name = this.state.name;
    var file = this.state.avatarImageFile;
    var formData = new FormData();
    formData.append("user[email]", email);
    formData.append("user[name]", name);
    formData.append("user[title]", title);
    if (file !== null) {
      formData.append("user[avatar]", file);
    }

    UserUtil.updateUser(this.state.userID, formData, this._resetForm);
  },

  _onFormChange: function(e) {
    var target = e.target;
    var attr = target.dataset.attr;
    this.state[attr] = target.value;
    this.forceUpdate();
  },

  componentDidMount: function () {
    UserStore.addUpdateUserListener(this._handleCancel);
  },

  componentWillUnMount: function () {
    UserStore.removeUpdateUserListener(this._handleCancel);
  },

  render: function(){
    var name = this.state.name[0].toUpperCase() + this.state.name.slice(1);
    return (
      <div className="profile-modal">
        <div className="profile-modal-panel">
          <article className="recordable">
            <span className="modal-close profile-modal-close">&times;</span>
            <header>
              <h1>
                <CurrentUserAvatar />
                <span>{name + "'s "} Profile</span>
              </h1>
            </header>
            <section className="centered profile-content">
              <form onSubmit={this._handleSubmit}>
                <Errors />
                <fieldset className="profile-form-fieldset">
                  <label>
                    <span>Name</span>
                    <input className="profile-form-input"
                      data-attr="name"
                      value={this.state.name}
                      onChange={this._onFormChange}
                      placeholder="Joe Schmoe" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input className="profile-form-input"
                      data-attr="email"
                      value={this.state.email}
                      onChange={this._onFormChange}
                      placeholder="joe@example.com" />
                  </label>
                  <label>
                    <span>Job title</span>
                    <input className="profile-form-input"
                      data-attr="title"
                      value={this.state.title}
                      onChange={this._onFormChange}
                      placeholder="CEO" />
                  </label>
                  <label>
                    <span>Profile Picture</span>
                    <input
                      type="file"
                      onChange={this._changeFile} />
                    <img className="avatar-preview-image"
                      src={this.state.avatarImageUrl} />
                  </label>
                  <div className="profile-form-submit">
                    <input
                      type="submit"
                      className="action-button"
                      id="profile-submit-button"
                      value="Update profile"/>
                    <span className="button-alternative">or
                      <strong className="profile-modal-close">
                        <a onClick={this._handleCancel}>Cancel</a>
                      </strong>
                    </span>
                  </div>
                </fieldset>
              </form>
            </section>
          </article>
          <div className="modal-screen profile-modal-close"></div>
        </div>
      </div>
    );
  }
});
