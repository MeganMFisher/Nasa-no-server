angular.module('app').directive('colorDirective', function(){
    function colorChanger(){
    var colors = ['red', 'gold', 'orange', 'crimson', 'orangered'];

    return colors[Math.floor(Math.random() * colors.length)]

}
    return {
        restrict: 'AE',
        template: '<div>Volcanoes</div>',
        link: function(scope, element, attributes){
            element.on('click', function(){

                setInterval(function() {
                
                element.css('color', colorChanger());

                }, 1000)


            })
        }
    }
})