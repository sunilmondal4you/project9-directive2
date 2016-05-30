/**
 * Created by abc on 30/05/2016.
 */

app .directive('formDirective',function() {
    return{
        restrict:'AEC',
        templateUrl:'mydirective.html'
    
    };
});

app .directive('tableDirective',function() {
    return{
        restrict:'AEC',
        templateUrl:'tabledirective.html'

    };
});