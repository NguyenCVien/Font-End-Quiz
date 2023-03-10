app.controller('registerCtrl', function($rootScope, $scope) {
    $scope.register = function() {
        $rootScope.students.push(angular.copy($scope.studentR));
        $scope.studentR = {};
        $scope.repassword = '';
        Swal.fire({
            title: 'Đăng kí thành công!',
            text: 'Quay lại trang chủ!',
            showConfirmButton: false,
            closeOnClickOutside: false,
            allowOutsideClick: false,
            timer: 1600
        });
        window.location.href = "#!index";
    }
});