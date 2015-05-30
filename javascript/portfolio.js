var app = angular.module('portfolio', []);
app.controller('portfolioContact', function($scope) {
	'use strict';
    $scope.firstName = "Tim";
    $scope.lastName = "Hilhorst";
});

app.controller('portfolioMenu', function($scope) {
	'use strict';
    $scope.menuTopToSide = function() {
    	var header = document.querySelector('.menu');
    	var headerHeight = header.offsetHeight;
        window.addEventListener('scroll', function(e){
    	    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    	    moveToLeftOn = 250;
    	    if (distanceY < moveToLeftOn) {
				header.style.height = (- distanceY) + headerHeight + "px";
    	    }
    	    console.log(distanceY + headerHeight);
    	    console.log(distanceY);

    	    if (distanceY > moveToLeftOn) {
    	    	header.style.height = "";
    	        header.classList.add('smaller');
    	    } 
    	    else {
    	        if (header.classList.contains('smaller')) {
    	            header.classList.remove('smaller');
    	        }
    	    }
    	});
    }();
});