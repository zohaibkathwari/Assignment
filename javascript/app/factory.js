/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, TestAssignment, angular*/

TestAssignment.factory('DataFactory', ['$http', function DataFactory($http) {
    'use strict';
    DataFactory.getData = function () {
        return $http.get('data/data.json');
    };
    return DataFactory;
}]);