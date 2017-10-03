angular
    .module("hrApp")
    .controller("cartController", function($scope, $state, cartService, transactionService, userService, $http) {

        $scope.cart = [];
        $scope.total = 0;

        $scope.currentUser = userService.getCurrentUser();


        cartService.getCart(function(response) {
            $scope.cart = response;
            for(var i = 0; i < $scope.cart.length; i++) {
                $scope.total += $scope.cart[i].cost;
            }

        })

        $scope.deleteItem = function(item) {
            cartService.removeFromCart(item);
  

        }

        $scope.checkout = function() {
            var transaction = {
                userId: $scope.currentUser.id,
                totalCost: $scope.total
            }

            $scope.currentUser.totalPoints -= $scope.total;

            transactionService.addTransaction(transaction);
            
            $http.put("http://localhost:60069/api/users/" + $scope.currentUser.id, $scope.currentUser);

            alert("Thank you for your order! You will receive an email notifying you once your order has been processed!");

            $state.transitionTo("app.viewAccount", { id: $scope.currentUser.id }, { reload: true });

        }

        

       

            

    })