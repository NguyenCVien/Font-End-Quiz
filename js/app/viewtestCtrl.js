app.controller('viewtestCtrl', function($scope, $routeParams, $route, $rootScope) {
    $rootScope.subjects.forEach(ar => {
        if (ar.Id == $routeParams.id) {
            $scope.subject = angular.copy(ar);
            return;
        }
    });
    $scope.test = function() {
        if ($rootScope.student == null) {
            Swal.fire({
                title: 'Bạn chưa đăng nhập!',
                text: 'Hãy quay lại sau khi đăng nhập!'
            });
        } else {
            Swal.fire({
                title: 'Bắt đầu thi?',
                text: "Bạn đã sẳn sàng!",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có! Bắt đầu thi.',
                cancelButtonText: 'Chưa'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "#!test/" + $scope.subject.Id;
                }
            })
        }
    }
});