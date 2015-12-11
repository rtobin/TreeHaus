UserUtil = {
  updateUser: function(userID, formData, callback) {
    $.ajax({
      url: '/api/users/' + userID,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(userData, callback) {
        UserActions.updateUser(userData);
        // callback && callback();
      }
    })
  }
};
