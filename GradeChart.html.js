var module;
try {
  module = angular.module('ng-d3');
} catch (e) {
  module = angular.module('ng-d3', []);
}

module.run(['$templateCache', function ($templateCache) {
  $templateCache.put('GradeChart.html',
    '<svg ng-attr-width="{{ width }}"\n' +
    '    ng-attr-height="{{ height }}">\n' +
    '    <g ng-attr-transform="translate({{ margin.left }}, {{ margin.top }})">\n' +
    '        <g class="axis"\n' +
    '            d3-component="d3.svg.axis"\n' +
    '            d3c-scale="xScale"\n' +
    '            d3c-orient="\'top\'"\n' +
    '            d3c-tick-values="axisTicks">\n' +
    '        </g>\n' +
    '        <g class="grid"\n' +
    '            d3-component="d3.svg.axis"\n' +
    '            d3c-scale="xScale"\n' +
    '            d3c-orient="\'bottom\'"\n' +
    '            d3c-tick-format="\'\'"\n' +
    '            d3c-tick-size="gridTickSize"\n' +
    '            d3c-tick-values="axisTicks">\n' +
    '        </g>\n' +
    '        <g class="grade" ng-repeat="grade in grades">\n' +
    '            <rect class="grade-bar"\n' +
    '                ng-class="grade.letter"\n' +
    '                x="0"\n' +
    '                ng-attr-y="{{ yScale($index) - (barHeight / 2) }}"\n' +
    '                ng-attr-height="{{ barHeight }}"\n' +
    '                width="0"\n' +
    '                anim-svg\n' +
    '                anim-duration="animDuration"\n' +
    '                anim-delay="$index * animDelay"\n' +
    '                anim-easing="\'0.1 0.8 0.2 1\'"\n' +
    '                anim-attr-width="xScale(grade.score)" />\n' +
    '            <text class="grade-student"\n' +
    '                text-anchor="left"\n' +
    '                ng-attr-x="{{ -xScale(grade.score) }}"\n' +
    '                dx="20"\n' +
    '                ng-attr-y="{{ yScale($index) }}"\n' +
    '                dy="6"\n' +
    '                anim-svg\n' +
    '                anim-duration="animDuration"\n' +
    '                anim-delay="$index * animDelay"\n' +
    '                anim-easing="\'0.1 0.8 0.2 1\'"\n' +
    '                anim-attr-x="0">\n' +
    '                {{ grade.student }}\n' +
    '            </text>\n' +
    '            <text class="grade-score"\n' +
    '                text-anchor="right"\n' +
    '                x="0"\n' +
    '                dx="-40"\n' +
    '                ng-attr-y="{{ yScale($index) }}"\n' +
    '                dy="6"\n' +
    '                anim-svg\n' +
    '                anim-duration="animDuration"\n' +
    '                anim-delay="$index * animDelay"\n' +
    '                anim-easing="\'0.1 0.8 0.2 1\'"\n' +
    '                anim-attr-x="xScale(grade.score)">\n' +
    '                {{ grade.score }}\n' +
    '            </text>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg>\n' +
    '');
}]);
