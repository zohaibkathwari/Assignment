/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, angular, TestAssignment*/

//(function (ng) {
//    "use strict";
//    if (!document.URL.match(/\?nobackend$/)) {
//        return; //no backend specified
//    }
//    console.log('Using Stubbed Backend');
//    function initializeStubbedBackend() {
//        ng.module('TestAssignment')
//            .config(function ($provide) {
//                $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
//            })
//            .run(['$http', '$httpBackend', function ($http, $httpBackend) {
//                var get = function () {
//                        $http.get('../data/data.json').then(function(data){
//                            console.log(data);
//                        });
//                         var tempData;
//                            $httpBackend.whenGET('../data/data.json').respond(tempData);
//                            console.log('tempData: ', tempData);
//                       return tempData;
//                    };
//                get();
//            }]);
//    }
//    initializeStubbedBackend();
//})(angular); 