/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, DataFactory, TestAssignment*/

/*Controllers*/
TestAssignment.controller("AppController", ["$scope", "DataFactory",
    function ($scope, DataFactory) {
        "use strict";
        DataFactory.getData().success(function (data) {
            $scope.tests = data.tests;
        });

        //Index variable to control show - hide
        $scope.selectedIndex = -1;
        $scope.setSelectedIndex = function (index) {
            $scope.selectedIndex = index;
        };
        /*pie test data*/
        $scope.unitLabels = ["passed", "failed"];
        $scope.unitData = [142, 10];
        $scope.functionalLabels = $scope.unitLabels;
        $scope.functionaData = [4321, 2145];
    }
    ]);