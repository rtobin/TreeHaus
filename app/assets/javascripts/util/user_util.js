UserUtil = {
  updateUser: function(userID, formData, callback) {
    $.ajax({
      url: '/api/users/' + userID,
      type: 'PUT',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(userData) {
        UserActions.updateUser(userData);
        // callback && callback();
      }
    })
  }
};
