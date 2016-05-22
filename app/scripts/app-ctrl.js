angular.module('myApp')
.controller('AppCtrl', function($scope, $http){

  console.log('inside the controller');

  $scope.students = [];

    // $scope.loadStudentJson = function() {
    //     var httpRequest = $http({
    //         method: 'GET',
    //         url: 'https://script.googleusercontent.com/macros/echo?user_content_key=QKr2C80cYaXhiTmD1bc-KMeLbGgc6cjD4-_k2Vn0w_pJ5sg0Z9znaCYzrm6ue-5bEZu8Pfbsw5Kk-ikqJBkuh2BDytf3hoPXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFL1bTUvgtX-I3dP-rkaVkXwq9c0lP_yAdwLqrO1fBG9ViVZIXLuuM38ZxVVktS6pGwihnkohuAm&lib=Mw-ve0R7zJP9N1rf46jTbuILi7CGwAUIU',
    //     }).success(function(data, status) {
    //         $scope.students = data;
    //     });
    //     console.log('students are ', $scope.students);
    // };

  $scope.loadStudentInfo = function() {
    var httpRequest = $http({
        method : "GET",
        url : "https://script.googleusercontent.com/macros/echo?user_content_key=QKr2C80cYaXhiTmD1bc-KMeLbGgc6cjD4-_k2Vn0w_pJ5sg0Z9znaCYzrm6ue-5bEZu8Pfbsw5Kk-ikqJBkuh2BDytf3hoPXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFL1bTUvgtX-I3dP-rkaVkXwq9c0lP_yAdwLqrO1fBG9ViVZIXLuuM38ZxVVktS6pGwihnkohuAm&lib=Mw-ve0R7zJP9N1rf46jTbuILi7CGwAUIU"
    }).then(function mySuccess(response) {
        $scope.students = response.data;
    }, function myError(response) {
        $scope.error = response.statusText;
    });
  };

});