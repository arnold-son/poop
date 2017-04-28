myApp.controller('StallsController', ['$scope', 'StallsFactory', function($scope, StallsFactory) {
    var index = function() {
        StallsFactory.index(function(data) {
            $scope.stalls = data;
        });
    }
    index();
    setInterval(function(){ index(); }, 1000);
}]);
