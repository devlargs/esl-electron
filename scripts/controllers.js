app.controller('LoginCtrl', function ($scope, ApiService) {
    $scope.user = {};

    console.log('./.')
    console.log(ApiService.get());

});

app.controller('ADashboardCtrl', function($scope, ApiService){
    
})