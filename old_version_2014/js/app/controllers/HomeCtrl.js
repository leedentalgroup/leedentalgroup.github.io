ang.controller('HomeCtrl', function($scope, $timeout, $interval, parallaxHelper, $location, anchorSmoothScroll) {

    $scope.background = parallaxHelper.createAnimator(-0.7, 100, -100);

    $scope.setTab = function(tab){
      $location.hash(tab);
      anchorSmoothScroll.scrollTo(tab);
    };



});