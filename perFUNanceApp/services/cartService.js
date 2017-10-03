angular
    .module("hrApp")
    .service("cartService", function($http, $state) {

        var _cart = [];

        this.getCart = function(cb) {
            cb(_cart);
        }

        this.addToCart = function(item) {
            _cart.push(item);
        }
        
        this.removeFromCart = function(item) {
            for(var i = 0; i < _cart.length; i++) {
                if(item.id == _cart[i].id) {
                    _cart.splice(i, 1);
                }
            }
            console.log(_cart);
        }
    })