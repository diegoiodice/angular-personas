/**
 * Created by diego.iodice on 15/07/2014.
 */
'use strict';
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
    $http.get('data/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});
