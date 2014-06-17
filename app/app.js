// Define all your modules with no dependencies
var addressModule = angular.module('addressModule', []);
var paymentModule = angular.module('paymentModule', []);
var summaryModule = angular.module('summaryModule', []);

//The main module called 'paymenter'
var paymenter = angular.module('paymenter', ['addressModule','paymentModule', 'summaryModule']);

paymenter.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/address', {controller: 'AddressController', templateUrl: 'app/address/partials/main.tmp.html'})
        .when('/payment', {controller: 'PaymentController', templateUrl: '/payment/partials/main.tmp.html'})
        .when('/summary', {controller: 'SummaryController', templateUrl: '/summary/partials/main.tmp.html'})
        .otherwise('/', {templateUrl: '/address/partials/main.tmp.html'})
}]);