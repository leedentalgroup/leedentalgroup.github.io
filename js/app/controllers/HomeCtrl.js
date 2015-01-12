ang.controller('HomeCtrl', function($scope, $timeout, $interval, parallaxHelper) {

    $scope.background = parallaxHelper.createAnimator(-0.7, 100, -100);

    $scope.setTab = function(tab){
      $scope.activeTab = tab;
    };

});