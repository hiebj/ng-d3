angular
    .module('ng-d3')
    .directive('gradeChart', GradeChart);

function GradeChart($window, grades) {
    var d3 = $window.d3;

    function link($scope, $element, $attrs) {
        $scope.margin = { top: 25, right: 20, bottom: 5, left: 5 };
        $scope.axisTicks = d3.range(0, 110, 10);
        $scope.animDuration = 2500;
        $scope.animDelay = 200;
        $scope.grades = grades;
        processGrades();
        angular.element($window).on('resize', processGrades);

        function processGrades() {
            var elementWidth = $element[0].offsetWidth;
            if (elementWidth > 0) {
                $scope.width = $element[0].offsetWidth;
                var interiorWidth = $scope.width - $scope.margin.left - $scope.margin.right;
                $scope.barHeight = 58;
                var halfBar = $scope.barHeight / 2;
                var interiorHeight = $scope.grades.length * ($scope.barHeight + 3);
                $scope.height = interiorHeight + $scope.margin.top + $scope.margin.bottom;
                $scope.gridTickSize = interiorHeight + 3;

                $scope.xScale = d3.scale.linear()
                    .domain([ 0, 100 ])
                    .range([ 0, interiorWidth ]);
                $scope.yScale = d3.scale.linear()
                    .domain([ 0, $scope.grades.length - 1 ])
                    .range([ halfBar + 3, interiorHeight - halfBar ]);
            }
        }
    }

    return {
        restrict: 'E',
        templateUrl: 'GradeChart.html',
        link: link
    };
}
