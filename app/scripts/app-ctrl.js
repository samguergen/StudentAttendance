angular.module('myApp')
.controller('AppCtrl', function($scope, $http){
  console.log('inside the controller');

  $scope.students = [];
  $scope.absentStudents = [];

  $scope.loadStudentInfo = function() {
    console.log('inside loadStudentInfo func');
    var httpRequest = $http({
        method : "GET",
        url : "https://script.googleusercontent.com/macros/echo?user_content_key=QKr2C80cYaXhiTmD1bc-KMeLbGgc6cjD4-_k2Vn0w_pJ5sg0Z9znaCYzrm6ue-5bEZu8Pfbsw5Kk-ikqJBkuh2BDytf3hoPXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFL1bTUvgtX-I3dP-rkaVkXwq9c0lP_yAdwLqrO1fBG9ViVZIXLuuM38ZxVVktS6pGwihnkohuAm&lib=Mw-ve0R7zJP9N1rf46jTbuILi7CGwAUIU"
    }).then(function mySuccess(response) {
        $scope.students = response.data;
    }, function myError(response) {
        $scope.error = response.statusText;
    });
  };

  $scope.checkAttendance = function(attendanceType) {
    // console.log('check attendance func initiated');
    // console.log('attendance type is ', attendanceType);
    // console.log('scope.students size is ');
    // console.log($scope.students.length);
    // $scope.byAbs = true;
    var absenceWindow = attendanceType;

    angular.forEach($scope.students, function(student){
       console.log(student.studentEmail, student.studentEmail.length);
       if ( (student.attendanceType == 0) || (student.attendanceType == "") || (student.studentEmail.length == 0) ) {
        console.log('emptyyy');
        $scope.absentStudents << student;
      }
      return $scope.absentStudents;
    })
  }

});