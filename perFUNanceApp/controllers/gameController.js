angular
    .module("hrApp")
    .controller("gameController", function ($scope, $state, gameService, userService) {
        $scope.currentUser = userService.getCurrentUser();
        $scope.currentPoints = 0;
        $scope.bonusPoints = 0;

        if ($scope.currentUser != null || $scope.currentUser != undefined) {
            $scope.currentPoints = $scope.currentUser.totalPoints;
        }
        
        
        $scope.minefield = gameService.createMineField()

        $scope.uncoverSpot = function (spot) {
            if ($scope.pointInput == undefined) {
                $scope.toomanypoints = false;
                $scope.emptypoints = true;
            }
            else if ($scope.pointInput > $scope.currentPoints) {
                $scope.emptypoints = false;
                $scope.toomanypoints = true;
            }
            else {
                $scope.emptypoints = false;
                $scope.toomanypoints = false;
                spot.isCovered = false;
                console.log($scope.originpoints);
                if (spot.content == "mine") {
                    alert("You lost! See " + $scope.pointInput + " points disappear!");
                    $scope.currentPoints -= $scope.pointInput;
                    $scope.currentUser.totalPoints = $scope.currentPoints;
                    userService.updateUser($scope.currentUser);
                    $scope.minefield = gameService.createMineField();
                    $scope.pointInput = undefined;
                    $scope.bonusPoints = 0;
                }
                else {
                    if (spot.bonus == true) {
                        $scope.bonusPoints += spot.content;
                    }
                    if (gameService.hasWon($scope.minefield)) {
                        $scope.currentPoints += ($scope.pointInput + $scope.bonusPoints);
                        $scope.currentUser.totalPoints = $scope.currentPoints;
                        userService.updateUser($scope.currentUser);
                        alert("You won! You now have a total of " + $scope.currentPoints + " points!")
                        $scope.minefield = gameService.createMineField();
                        $scope.pointInput = undefined;
                        $scope.bonusPoints = 0;
                    }
                }
            }
        }

        $scope.flag = function (spot) {
            if (spot.flagged == true) {
                spot.flagged = false;
            } else {
                spot.flagged = true;
            }
        }

    })
    .directive('ngRightClick', function ($parse) {
        return function (scope, element, attrs) {
            var fn = $parse(attrs.ngRightClick);
            element.bind('contextmenu', function (event) {
                scope.$apply(function () {
                    event.preventDefault();
                    fn(scope, { $event: event });
                });
            });
        };
    })

