var app = angular.module('portfolio', []);
app.controller('portfolioContact', function($scope) {
	'use strict';
    $scope.firstName = "Tim";
    $scope.lastName = "Hilhorst";
});

app.controller('portfolioMenu', function($scope) {
	'use strict';

    $scope.clickOpen = function () {
        // body...
        var menuSide = document.querySelector('.menu');
        window.addEventListener('click', function(e) {

        });
    }();
});