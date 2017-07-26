var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('login',{
            url : '/',
            templateUrl : 'templates/login.html',
            controller : 'LoginCtrl'
        })
        
        .state('admin',{
            url : '/a',
            templateUrl : 'templates/admin/dashboard.html',
            controller : 'ADashboardCtrl'
        })

        // .state('dealer',{
        //     url: '/dealer',
        //     templateUrl : 'templates/dealer/dealer_header.html',
        //     controller: 'DealerHeaderCtrl',
        //     abstract : true
        // })

        // .state('dealer.users',{
        //     url : '/register',
        //     templateUrl : 'templates/dealer/users.html',
        //     controller : 'DealerUserCtrl'
        // })

    $urlRouterProvider.otherwise('/')
});