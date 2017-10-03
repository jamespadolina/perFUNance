angular
    .module("hrApp")
    .controller("rewardsController", function($scope, $state, rewardsService, cartService) {

        $scope.cart = [];

        cartService.getCart(function(response) {
            $scope.cart = response;
        })

        rewardsService.getRewards(function(response) {
            $scope.rewards = response;
        });

        $scope.addToCart = function(item) {
            cartService.addToCart(item);
        }

        
    })