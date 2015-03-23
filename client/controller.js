/**
 * @ngInject
 * @param $meteor
 * @constructor
 */
var Ctrl = function ($meteor) {
  this.message = "hello";

  this.action = function (name) {
    alert(message);
  };

  $meteor.subscribe('contacts').then(function () {
    this.contacts = $meteor.collection(Contacts);
  }.bind(this));

};
angular.module("app").controller("Ctrl", Ctrl);


