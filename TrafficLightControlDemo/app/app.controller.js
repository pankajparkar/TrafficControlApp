(function () {
    'use strict';

    MainController.$inject = ['$location'];

    function MainController($location) {
        var main = this;

        main.isActive = function (url) {
            return $location.path() === url;
        }
    }

    angular.module('traffic-light-control')
        .controller('MainController', MainController);

})();
