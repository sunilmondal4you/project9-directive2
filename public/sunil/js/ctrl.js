/**
 * Created by abc on 30/05/2016.
 */
var app=angular.module("app");

app.service('myservices',function () {
    this.arr=[];
    
});

app.controller("default",function($scope,myservices){

    $scope.savedetail=function () {
        myservices.arr.push($scope.userlist);
    };


});

app.controller("second",function($scope,myservices){
    //debugger;
    $scope.userlist=myservices.arr;


});

