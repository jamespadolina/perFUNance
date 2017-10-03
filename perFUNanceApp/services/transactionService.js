angular
    .module("hrApp")
    .service("transactionService", function($http, $state) {

        var _transactions = [];

        this.getTransactions = function(cb) {
            $http.get("http://localhost:60069/api/transactions").then(
                function(response) {
                    _transactions = response.data;
                    cb(_transactions);
                },
                function(error) {
                    console.log(error);
                }
            )
        }

        this.addTransaction = function(transaction) {
            $http.post("http://localhost:60069/api/transactions", transaction);
        }

        this.updateTransaction = function(transaction) {
            $http.put("http://localhost:60069/api/transactions/"+transaction.id, transaction);
        }

        this.deleteTransaction = function(transaction) {
            $http.delete("http://localhost:60069/api/transactions/"+transaction.id);
        }

    })