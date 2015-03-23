
Template = {};

angular.module("app", ["angular-meteor"]);


Meteor.startup(function() { $('body').attr({"ng-app":"app","ng-include":"'client/index.ng.html'"}); });

