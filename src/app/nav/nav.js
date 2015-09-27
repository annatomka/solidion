angular.module( 'ngSolidion.nav', [
  'ui.router',
  'plusOne'
])

/**
 * And of course we define a controller for our route.izlil
 */
.controller( 'NavCtrl', function NavController( $scope ) {
	$scope.isMenuOpen = false;
	
	$scope.toggleMenu = function(){
		$scope.isMenuOpen = !$scope.isMenuOpen;
	};
});