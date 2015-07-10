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

    var sectionBg = document.getElementsByClassName('introduction')[0];
    var logo = document.getElementsByClassName('th-logo')[0];
    var testimonialsInView = document.getElementsByClassName("testimonials")[0].getBoundingClientRect();
    console.log(testimonialsInView);

    window.addEventListener('scroll', function() {
        sectionBg.style.backgroundPosition = "50% "+ pageYOffset / 2 +"px";
        logo.style.webkitFilter = "blur("+ (pageYOffset/50) +"px)";
        if(testimonialsInView === pageYOffset) {
            console.log("bingo");
            testimonialsInView.classList.add('animate');
        }
    });

});