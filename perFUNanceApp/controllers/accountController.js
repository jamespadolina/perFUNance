angular
    .module("hrApp")
    .controller("accountController", function ($scope, $state, $stateParams, userService, reviewService) {

        $scope.savebtn = false;
        $scope.submitbtn = true;

        //Get current user
        $scope.currentUser = userService.getCurrentUser();
        $scope.currentReviews = [];

        //Get all users
        userService.getUsers().then(function (response) {
            $scope.users = response.data;

            if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
                $scope.submitbtn = true;
                $scope.savebtn = false;
                $scope.heading = "perFUNance Enrollment";
                $scope.enrollment = true;
                userService.getUserById($stateParams.id,
                    function (user) {
                        $scope.user = user;
                        console.log($scope.user);
                    })
            }
            else {
                $scope.submitbtn = false;
                $scope.savebtn = true;
                $scope.heading = "Update Your Account";
                $scope.enrollment = false;
                userService.getUserById($stateParams.id,
                    function (user) {
                        $scope.user = user;
                    })
            }

        }, function(error) {
            console.log(error);
        })

        //Get all reviews
        reviewService.getReviews().then(function (response) {
            $scope.reviews = response.data;
            //Get reviews relevant to current user
            if ($scope.currentUser != undefined) {
                for (var i = 0; i < $scope.reviews.length; i++) {
                    if ($scope.reviews[i].userId == $scope.currentUser.id || $scope.reviews[i].supervisorId == $scope.currentUser.id) {
                        $scope.currentReviews.push($scope.reviews[i]);
                    }
                }

            }
        }, function(error) {
            console.log(error);
        })

        //Add New User

        $scope.submitAccount = function () {
            console.log($scope.user);
            userService.addUser($scope.user);
            console.log($scope.users);
            $state.go("app.login");

        }

        //Update User INformation
        $scope.saveAccount = function () {
            userService.updateUser($scope.user);
            $state.transitionTo("app.manage", { reload: true })
        }


    })