


angular.module("app").controller("Ctrl", function () {
  this.message = "hello";
  
  this.action = function(message){
    alert(message);
  }
});


