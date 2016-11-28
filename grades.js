angular
    .module('ng-d3')
    .constant('grades', getGrades());

function getGrades() {
    return [{
        "student": "Eric Elliot",
        "score": 93,
        "letter": "A"
    }, {
        "student": "Larry Page",
        "score": 79,
        "letter": "C"
    }, {
        "student": "Linus Torvalds",
        "score": 62,
        "letter": "F"
    }, {
        "student": "Steve Wozniak",
        "score": 88,
        "letter": "B"
    }, {
        "student": "Alan Turing",
        "score": 97,
        "letter": "A"
    }, {
        "student": "Bill Joy",
        "score": 91,
        "letter": "A"
    }, {
        "student": "Larry Wall",
        "score": 69,
        "letter": "D"
    }, {
        "student": "Bill Gates",
        "score": 84,
        "letter": "B"
    }, {
        "student": "James Gosling",
        "score": 86,
        "letter": "B"
    }, {
        "student": "Ada Lovelace",
        "score": 71,
        "letter": "C"
    }, {
        "student": "Steve Jobs",
        "score": 54,
        "letter": "F"
    }];
}
