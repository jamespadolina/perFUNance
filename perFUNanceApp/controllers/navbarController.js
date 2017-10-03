angular
    .module("hrApp")
    .controller("navbarController", function($scope, $state, userService) {
        
        $scope.currentUser = userService.getCurrentUser();
        $scope.logout = function() {
            userService.logout();
        }

    })