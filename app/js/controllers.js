routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [{
        name: 'Macallan 12',
        price: 50
    }, {
        name: 'Chivas Regal Royal Salute',
        price: 10000
    }, {
        name: 'Glenfiddich 1937',
        price: 20000
    }];

});

routerApp.controller("homeController", function($rootScope, $scope, $state) {

    $scope.go = function(route) {
        $state.go(route);
    };

    $scope.active = function(route) {
        return $state.is(route);
    };

    $scope.tabs = [{
            heading: "Welcome",
            route: "home.welcome",
            active: true
        }, {
            heading: "About Me",
            route: "home.bio",
            active: false
        }, {
            heading: "About the App",
            route: "home.angular",
            active: false
        },

        {
            heading: "Responsive Design",
            route: "home.design",
            active: false
        },

        {
            heading: "The FireBase BaaS",
            route: "home.FireBaseBaaS",
            active: false
        },
    ];


    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
    });
});

routerApp.controller('MyController', ['$scope', '$firebase',
        function($scope, $firebase) {
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://process.firebaseio.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebase(ref).$asArray();

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              var name = $scope.name || 'anonymous';

              //ADD TO FIREBASE
              $scope.messages.$add({
                from: name,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";
            }
          }
        }
      ]);