angular
    .module("hrApp")
    .controller("reviewController", function ($scope, $state, $stateParams, reviewService, userService) {

        $scope.submitbtn = true;
        $scope.savebtn = false;

        userService.getUsers().then(function (response) {
            $scope.users = response.data;
        })


        reviewService.getReviews().then(function (response) {
            $scope.reviews = response.data;

            if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
                $scope.submitbtn = true;
                $scope.savebtn = false;
                $scope.heading = "Write a Performance Review";
                $scope.enrollment = true;
                reviewService.getReviewById($stateParams.id,
                    function (review) {
                        $scope.review = review;
                        console.log($scope.review);
                    })
            }
            else {
                $scope.submitbtn = false;
                $scope.savebtn = true;
                $scope.heading = "Update Your Review";
                $scope.enrollment = false;
                reviewService.getReviewById($stateParams.id,
                    function (review) {
                        $scope.review = review;
                        console.log($scope.review);
                    })
            }

        }, function (error) {
            console.log(error);
        })


        $scope.submit = function () {
            $scope.review.totalPoints = 10 * ($scope.review.rating1 + $scope.review.rating2 + $scope.review.rating3)
            reviewService.addReview($scope.review);
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.review.userId == $scope.users[i].id) {
                    $scope.user = $scope.users[i];
                    $scope.user.totalPoints += $scope.review.totalPoints;
                    userService.updateUser($scope.user);
                }
            }
            alert("Your review has been submitted!");
            $scope.review = "";
            $scope.firstName = "";
            $scope.middleName = "";
            $scope.lastName = "";
        }

        $scope.save = function () {
            reviewService.updateReview($scope.review);
        }

    })