var app = angular.module("hrApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("app", {
            abstract: true,
            url: '',
            templateUrl: './views/app-container.html'
        })

        .state("app.home", {
            url: "/",
            templateUrl: "./views/home.html"
        })

        .state("app.account", {
            url: "/account",
            templateUrl: "./views/account.html",
            controller: "accountController"
        })

        .state("app.viewAccount", {
            url: "/account/:id",
            templateUrl: "./views/account.html",
            controller: "accountController"
        })

        .state("app.cart", {
            url: "/cart",
            templateUrl: "./views/cart.html",
            controller: "cartController"
        })

        .state("app.game", {
            url: "/game",
            templateUrl: "./views/game.html",
            controller: "gameController"
        })

        .state("app.login", {
            url: "/login",
            templateUrl: "./views/login.html",
            controller: "loginController"
        })

        .state("app.manage", {
            url: "/manage",
            templateUrl: "./views/manage.html",
            controller: "manageController"
        })

        .state("app.newAccount", {
            url: "/newaccount",
            templateUrl: "./views/newAccount.html",
            controller: "accountController"
        })
        .state("app.editAccount", {
            url: "/account/:id/edit",
            templateUrl: "./views/newAccount.html",
            controller: "accountController"
        })

        .state("app.newReview", {
            url: "/newreview",
            templateUrl: "./views/newReview.html",
            controller: "reviewController"
        })

        .state("app.editReview", {
            url: "/newreview/:id/edit",
            templateUrl: "./views/newReview.html",
            controller: "reviewController"
        })

        .state("app.rewards", {
            url: "/rewards",
            templateUrl: "./views/rewards.html",
            controller: "rewardsController"
        })

})