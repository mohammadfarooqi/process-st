angular.module('wistiaApp').component('wistiaUploadFileComponent', {
  templateUrl: 'templates/wistia.html',
  controller: function ($scope) {
    $scope.isFileAdded = false;
    $scope.uploadPercentage = 0;
    $scope.disabledbtn = false;

    // Options you want to pass to jQuery File Upload e.g.:
    $scope.options = {
      url: 'https://upload.wistia.com',
      formData: {
        api_password: '3be0bce50d0fbe09690406add827c829a5e05d388cdf36d28926133081e9c958'
      },
      type: 'POST'
    };

    //stop
    $scope.$on('fileuploaddone', function(e, data) {
      console.log('Uploads Finished');
      //console.log(data.result.hashed_id);
      // $('#inputFile').prop('disabled', false);

      $('#player').append('<div class="wistia_embed wistia_async_' + data.result.hashed_id + '" style="width:640px;height:360px; margin: auto"></div>');
    });

    $scope.$on('fileuploadstart', function(e) {
      console.log('Uploads Started');

      $('#inputFile').prop('disabled', true);
      $scope.disabledbtn = true;
    });

    $scope.$on('fileuploadadd', function(e) {
      $scope.isFileAdded = true;
      $scope.uploadPercentage = 0;
    });

    $scope.$on('fileuploadprogressall', function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      console.log(progress);

      $('.progress-bar').css('width', progress + '%');
      $scope.uploadPercentage = progress;
    });
  }
});