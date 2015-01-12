ang.controller('HomeCtrl', function($scope, $timeout, $interval, parallaxHelper, $location, $anchorScroll) {

    $scope.background = parallaxHelper.createAnimator(-0.7, 100, -100);

    $scope.setTab = function(tab){
      return $location.hash() !== tab ? $location.hash(tab) : $anchorScroll();
    };



});