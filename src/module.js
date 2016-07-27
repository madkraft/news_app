(function () {

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/"
                })
                .state('example1', {
                    url: "/example1",
                    templateUrl: "src/ex1/example1.html",
                    controllerAs: 'ctrl',
                    controller: 'ex1Controller'
                });
        })


}());
