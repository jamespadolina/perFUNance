angular
    .module("hrApp")
    .service("gameService", function ($http, $state) {

    var rows = 24;
    var indexrows = 23;
    var mines = 99;
    var bonuses = 80;

        //Function to create minefield
        this.createMineField = function () {
            var minefield = {};
            minefield.rows = [];

            for (var i = 0; i < rows; i++) {
                var row = {};
                row.spots = [];

                for (var j = 0; j < rows; j++) {
                    var spot = {};
                    spot.isCovered = true;
                    spot.flagged = false;
                    spot.content = 0;
                    spot.bonus = false;
                    row.spots.push(spot);
                }

                minefield.rows.push(row);
            }

            placeManyRandomMines(minefield);
            calculateAllNumbers(minefield);
            placeManyRandomBonus(minefield);
            

            return minefield;
        }

        //Generate random mines at a certain position in a row or column

        function getSpot(minefield, row, column) {
            return minefield.rows[row].spots[column]
        }

        function placeManyRandomMines(minefield) {
            for (var i = 0; i < mines; i++) {
                placeRandomMine(minefield);
            }
        }

        function placeManyRandomBonus(minefield) {
            for (var i = 0; i < mines; i++) {
                placeBonus(minefield);
            }
        }

        function placeRandomMine(minefield) {
            var row = Math.round(Math.random() * indexrows);
            var column = Math.round(Math.random() * indexrows);
            var spot = getSpot(minefield, row, column);
            spot.content = "mine";
        }

        function placeBonus(minefield) {
            var row = Math.round(Math.random() * indexrows);
            var column = Math.round(Math.random() * indexrows);
            var spot = getSpot(minefield, row, column);
            spot.bonus = true;
        }

        //Populate numbers by counting # of mines in surrounding area
        function calculateNumber(minefield, row, column) {
            var thisSpot = getSpot(minefield, row, column);

            //skip if spot contains mine

            if (thisSpot.content == "mine") {
                return;
            }

            var mineCount = 0;

            if (row > 0) {
                if (column > 0) {
                    // get the spot above and to the left
                    var spot = getSpot(minefield, row - 1, column - 1);
                    if (spot.content == "mine") {
                        mineCount++;
                    }
                }

                // get the spot right above
                var spot = getSpot(minefield, row - 1, column);
                if (spot.content == "mine") {
                    mineCount++;
                }

                if (column < indexrows) {
                    //get spot above and right
                    var spot = getSpot(minefield, row - 1, column + 1);
                    if (spot.content == "mine") {
                        mineCount++;
                    }
                }

            }

            //Check column to the left if not first column
            if (column > 0) {
                //spot to the left
                var spot = getSpot(minefield, row, column - 1);
                if (spot.content == "mine") {
                    mineCount++;
                }
            }

            //Check column to the right if not last column

            if (column < indexrows) {
                //check spot on right
                var spot = getSpot(minefield, row, column + 1);
                if (spot.content == "mine") {
                    mineCount++;
                }
            }

            //Check row below if not last row

            if (row < indexrows) {
                //Check left if not first first column
                if (column > 0) {
                    //get bottom left
                    var spot = getSpot(minefield, row + 1, column - 1);
                    if (spot.content == "mine") {
                        mineCount++;
                    }

                }

                //check below
                var spot = getSpot(minefield, row + 1, column);
                if (spot.content == "mine") {
                    mineCount++;
                }

                if (column < indexrows) {
                    //check bottom right
                    var spot = getSpot(minefield, row + 1, column + 1);
                    if (spot.content == "mine") {
                        mineCount++;
                    }
                }
            }

            if (mineCount > 0) {
                thisSpot.content = mineCount;
            }
        }

        function calculateAllNumbers(minefield) {
            for(var y = 0; y < rows; y++) {
                for(var x = 0; x < rows; x++) {
                    calculateNumber(minefield, x, y);
                }
            }
        }

        this.hasWon = function (minefield) {
            for(var y = 0; y < rows; y++) {
                for(var x = 0; x < rows; x++) {
                    var spot = getSpot(minefield, y, x);
                    if(spot.isCovered && spot.content != "mine") {
                        return false;
                    }
                }
            }
            return true;
        }

    })