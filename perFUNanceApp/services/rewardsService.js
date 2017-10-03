angular
    .module("hrApp")
    .service("rewardsService", function($http, $state) {

        var _rewards = [];

        this.getRewards = function(cb) {
            $http.get("http://localhost:60069/api/rewards")
                .then(function(response) {
                    _rewards = response.data;
                    cb(_rewards);
                },
                function(error) {
                    console.log(error);
                })
        }

        this.addRewards = function(reward) {
            $http.post("http://localhost:60069/api/rewards", reward);
        }

        this.updateReward = function(reward) {
            $http.put("http://localhost:60069/api/rewards"+reward.id, reward);
        }

        this.deleteReward = function(reward) {
            $http.delete("http://localhost:60069/api/rewards" +reward.id);
        }
    
    })