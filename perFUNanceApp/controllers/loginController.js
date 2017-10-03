angular
    .module("hrApp")
    .controller("loginController", function ($scope, $state, userService) {

        userService.getUsers().then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        })

        $scope.login = function () {

            userService.getUserUserPass($scope.userName, $scope.pass, function (user) {
                $scope.user = user;
                $state.transitionTo("app.viewAccount", { id: $scope.user.id }, { reload: true });
                userService.setCurrentUser($scope.user);

            })        
      


        }
    })