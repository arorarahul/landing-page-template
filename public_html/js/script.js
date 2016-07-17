var app = angular.module("myApp", []);

app.controller("dineout", ['$scope',function($scope){
   function simpleParallax() {
        var scrolled = $(window).scrollTop() + 1;
        $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
    }

    $(window).scroll(function (e) {
        simpleParallax();
    });
    $scope.city = "Delhi"; 
    $scope.people = "Number of People";
    $scope.date = "Date";
    $scope.time = "Time";
    $scope.fadenow = false; 
    $scope.findTable = true;
    $scope.findParty = false;
    $scope.opennow = false;
    
    $scope.anitmobilefade = function(){
        $scope.fadenow = false; 
        $scope.opennow = false;
    };
    $scope.changeCity = function(data){
        $scope.city = data;
        $scope.fadenow = false; 
    };
    $scope.changePeople = function(data){
        $scope.people = data;
        
    };
    $scope.changeDate = function(data){
        if(data == 'Today'){
            $scope.date = "24th Jan, 2016";
        }
        else{
        $scope.date = data;
        }
        
    };
    $scope.changeTime = function(data){
        $scope.time = data;
        
    };
    
    $scope.changeSearch1 = function(){
        $scope.findTable = true;
        $scope.findParty = false;
    };
    $scope.changeSearch2 = function(){
        $scope.findParty = true;
        $scope.findTable = false;
    };
    
    $scope.mobileMenu = function(){
        $scope.opennow = true;
        $scope.fadenow = true; 
    };
    
    
    (function(){
        $('.mobilemenu li').click(function(ev) {
            $(this).find('>ul').slideToggle();
            ev.stopPropagation();
            
        });
        
    })();
    
    
    
    
}]);

