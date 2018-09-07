// create an observable array with 10 objects (questions)

var questionArray = ko.observableArray([

  {
  quesNum: 1,
  ques: "What pattern in JavaScript restricts instantiation of a class to a single object?",
  ansA: "Constructor Pattern",
  ansB: "Singleton Pattern",
  ansC: "Prototype Pattern ",
  ansD: "Mixin Pattern",
  corAns: "ansB"
  },


  {
  quesNum: 2,
  ques: "Which looping statement is known as JavaScript’s basic loop?",
  ansA: "for loop",
  ansB: "do/while loop",
  ansC: "while loop ",
  ansD: "for/in loop",
  corAns: "ansC"
  },


  {
  quesNum: 3,
  ques: "The _______ method returns a string that follows the syntax of the function declaration statement.",
  ansA: "toString()",
  ansB: "bind()",
  ansC: "call()",
  ansD: "apply()",
  corAns: "ansA"
  },


  {
  quesNum: 4,
  ques: "The _______ pattern aims to encapsulate method invocation, request, or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion. ",
  ansA: "Prototype",
  ansB: "Factory",
  ansC: "Command",
  ansD: "Façade",
  corAns: "ansC"
  },


  {
  quesNum: 5,
  ques: "JavaScript’s reserve word ______ causes the innermost enclosing loop or switch statement to exit immediately.",
  ansA: "Try",
  ansB: "Catch",
  ansC: "Else",
  ansD: "Break",
  corAns: "ansD"
  },


  {
  quesNum: 6,
  ques: "Which of the following is NOT a correct way of declaring an array in JavaScript?",
  ansA: "var arr = [1, "two", 3 , 4 ];",
  ansB: "var arr = new Array();",
  ansC: "var[] arr = new Number()[5];",
  ansD: "None of the above",
  corAns: "ansC"
  },


  {
  quesNum: 7,
  ques: "Which of the following is true about variable naming conventions in JavaScript?",
  ansA: "You should not use any of the JavaScript reserved keyword as variable name.",
  ansB: "JavaScript variable names should not start with a numeral 0 − 9.",
  ansC: "Both of the above. ;",
  ansD: "None of the above,
  corAns: "ansC"
  },


  {
  quesNum: 8,
  ques: "Which of the following is a valid JavaScript function?",
  ansA: "var myFunc = function myFunc{ };",
  ansB: "function myFunc(){ };",
  ansC: "myFunc function(){ };",
  ansD: "function myFunc = { };",
  corAns: "ansB"
  },


  {
  quesNum: 9,
  ques: "Which of the following is true about variable naming conventions in JavaScript?",
  ansA: "You should not use any of the JavaScript reserved keyword as variable name.",
  ansB: "JavaScript variable names should not start with a numeral 0 − 9.",
  ansC: "Both of the above.",
  ansD: "None of the above.",
  corAns: "ansC"
  },


  {
  quesNum: 10,
  ques: "Which built-in method combines the text of two strings and returns a new string?",
  ansA: "append",
  ansB: "concat",
  ansC: "attach",
  ansD: "None of the above.",
  corAns: "ansB"
  },


]);


// reading information from the observable array
console.log("The question array contains " + myobservableArray().length);

// creating a question view model
var quesViewModel = {
  quesNum: ko.observabale("quesNum"),
  ques: ko.observable("ques"),
  ansA: ko.observable("ansA"),
  ansB: ko.observable("ansB"),
  ansC: ko.observable("ansC"),
  ansD: ko.observable("ansD"),
  corAns: ko.observable("ansA"),  
};
ko.applyBingings(quesViewModel);
