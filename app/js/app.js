var routerApp = angular.module('routerApp', ['ui.router',
    'ui.bootstrap', 'firebase'
]);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('');

    $stateProvider

        .state('home', {
        url: '',
        templateUrl: 'partials/view1.html'
    })

    .state('home.welcome', {
        url: '/welcome',
        templateUrl: 'partials/welcome.html',

    })
    
   .state('home.bio', {
        url: '/bio',
        templateUrl: 'partials/bio.html',
        controller: 'homeController'
    })

    .state('home.angular', {
        url: '/angular',
        templateUrl: 'partials/angular.html',
        controller: 'homeController'
    })

    .state('home.design', {
        url: '/design',
        templateUrl: 'partials/design.html',
        controller: 'homeController'
    })

    .state('home.FireBaseBaaS', {
        url: '/FireBaseBaaS',
        templateUrl: 'partials/FireBase.html',
        controller: 'homeController'
    })

    .state('comments', {
        url: '/comments',
        templateUrl: 'partials/FireBase-Form.html',
        controller: 'MyController'
    })


});