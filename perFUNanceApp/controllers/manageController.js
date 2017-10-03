angular
    .module("hrApp")
    .controller("manageController", function ($scope, $rootScope, $state, reviewService, rewardsService, transactionService, userService) {

        $scope.edittran = false;

        userService.getUsers().then(
            function (response) {
                $scope.users = response.data;
            }, function (error) {
                console.log(error);
            }
        )

        reviewService.getReviews().then(
            function(response) {
                $scope.reviews = response.data;
            }, function(error) {
                console.log(error);
            }
        )

        transactionService.getTransactions(function (response) {
            $scope.transactions = response;
        })

        rewardsService.getRewards(function (response) {
            $scope.rewards = response;
        })

        $scope.currentPageUser = 0;
        $scope.currentPageReview = 0;
        $scope.currentPageTransaction = 0;
        $scope.currentPageReward = 0;
        $scope.pageSize = 4;
        $scope.numberOfPages = function () {
            return Math.ceil($scope.users.length / $scope.pageSize);
        }

        $scope.previousPageUser = function () {
            $scope.currentPageUser -= $scope.pageSize;
        }

        $scope.nextPageUser = function () {
            $scope.currentPageUser += $scope.pageSize;
        }

        $scope.previousPageReview = function () {
            $scope.currentPageReview -= $scope.pageSize;
        }

        $scope.nextPageReview = function () {
            $scope.currentPageReview += $scope.pageSize;
        }
        $scope.previousPageTransaction = function () {
            $scope.currentPageTransaction -= $scope.pageSize;
        }

        $scope.nextPageTransaction = function () {
            $scope.currentPageTransaction += $scope.pageSize;
        }

        $scope.previousPageReward = function () {
            $scope.currentPageReward -= $scope.pageSize;
        }

        $scope.nextPageReward = function () {
            $scope.currentPageReward += $scope.pageSize;
        }

        $scope.editTransaction = function(transaction) {
            $scope.currentTransaction = transaction;
            $scope.edittran = true;
        }

        $scope.saveTransaction = function() {
            transactionService.updateTransaction($scope.currentTransaction);
            for(var i = 0; i < $scope.transactions.length; i++){
                if($scope.transactions[i].id == $scope.currentTransaction.id) {
                    $scope.transactions.splice(i,1, $scope.currentTransaction);
                }
            }
            $scope.edittran = false;
        }

        $scope.deleteAccount = function (user) {
            userService.deleteUser(user);
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].id == user.id) {
                    $scope.users.splice(i, 1);
                }
            }
        }

        $scope.deleteReview = function (review) {
            reviewService.deleteReview(review);
            for (var i = 0; i < $scope.reviews.length; i++) {
                if ($scope.reviews[i].id == review.id) {
                    $scope.reviews.splice(i, 1);
                }
            }
        }

        $scope.deleteTransaction = function (transaction) {
            transactionService.deleteTransaction(transaction);
            for (var i = 0; i < $scope.transactions.length; i++) {
                if ($scope.transactions[i].id == transaction.id) {
                    $scope.transactions.splice(i, 1);
                }
            }
        }

    })

    .filter('startFrom', function () {
        return function (input, start) {
            if (input != undefined) {
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    })