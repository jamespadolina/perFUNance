angular
    .module("hrApp")
    .service("reviewService", function ($http, $state) {

        var _reviews = [];

        this.getReviews = function () {
            return $http.get("http://localhost:60069/api/reviews");
        }
        
        this.getReviewById = function(id, cb) {
            $http.get("http://localhost:60069/api/reviews/"+id).then(function(response) {
                var review = response.data;
                cb(review);
            }, function(error) {
                console.log(error);
            })
            
        }

        this.addReview = function (review) {
            $http.post("http://localhost:60069/api/reviews", review);
        }

        this.updateReview = function (review) {
            $http.put("http://localhost:60069/api/reviews/" + review.id, review).then(function() {
                for(var i = 0; i < _reviews.length; i++) {
                    if(_reviews[i].id == review.id) {
                        _reviews.splice(i, 1, review);
                       
                    }
                }
                $state.transitionTo("app.manage", {reload: true});
            }, function(error) {
                console.log(error);
            })
            
        }

        this.deleteReview = function (review) {
            $http.delete("http://localhost:60069/api/reviews/" + review.id).then(function() {
                $state.transitionTo("app.manage", {reload: true});
            }, function(error) {
                console.log(error);
            })
           
        }

    })