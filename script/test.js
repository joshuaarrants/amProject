var QuizViewModel = function () {

  //declared observables
  var self = this;

  // observableArray of our JavaScript Trivia Questions
  self.questions = ko.observableArray([
    {
      question: '1.	What pattern in JavaScript restricts instantiation of a class to a single object?',
      answers: {A: 'Constructor Pattern', B: 'Singleton Pattern', C: 'Prototype Pattern', D: 'Mixin Pattern'},
      answer: 'B'
    },
    {
      question: '2.	Which looping statement is known as JavaScript’s basic loop?',
      answers: {A: 'for loop', B: 'do/while loop', C: 'while loop', D: 'for/in loop'},
      answer: 'C'
    },
    {
      question: '3.	The _______ method returns a string that follows the syntax of the function declaration statement.',
      answers: {A: 'toString()', B: 'bind()', C: 'call()', D: 'apply()'},
      answer: 'A'
    },
    {
      question: '4.	The _______ pattern aims to encapsulate method invocation, request, or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion.',
      answers: {A: 'Prototype', B: 'Factory', C: 'Command', D: 'Facade'},
      answer: 'C'
    },
    {
      question: '5. JavaScript’s reserve word ______ causes the innermost enclosing loop or switch statement to exit immediately.',
      answers: {A: 'Try', B: 'Catch', C: 'Else', D: 'Break'},
      answer: 'D'
    },
    {
      question: '6. Which of the following is NOT a correct way of declaring an array in JavaScript?',
      answers: {A: 'var arr = [1, "two", 3 , 4 ];', B: 'var arr = new Array();', C: 'var[] arr = new Number()[5];', D: 'None of the above.'},
      answer: 'C'
    },
    {
      question: '7.	Which of the following is true about variable naming conventions in JavaScript?',
      answers: {A: 'You should not use any of the JavaScript reserved keyword as variable name', B:	'JavaScript variable names should not start with a numeral 0 − 9.', C: 'Both of the above.', D: 'None of the above.'},
      answer: 'C'
    },
    {
      question: '8.	Which of the following is a valid JavaScript function?',
      answers: {A: 'var myFunc = function myFunc{ };', B: 'function myFunc(){ };', C: 'myFunc function(){ };', D: 'function myFunc = { };'},
      answer: 'B'
    },
    {
      question: '9.	Which of the following is true about variable naming conventions in JavaScript?',
      answers: {A: 'You should not use any of the JavaScript reserved keyword as variable name', B:	'JavaScript variable names should not start with a numeral 0 − 9.', C: 'Both of the above.', D: 'None of the above.'},
      answer: 'C'
    },
    {
      question: '10. Which built-in method combines the text of two strings and returns a new string?',
      answers: {A: 'end', B: 'concat', C: 'attach', D: 'None of the above.'},
      answer: 'B'
    }
  ]);

  var currentQuestionIndex = ko.observable(0);

  function questionNavigation(numberOfQuestions) {
    if (currentQuestionIndex() + numberOfQuestions >= self.questions().length) {
      return;
    }
    if (currentQuestionIndex() + numberOfQuestions < 0) {
      return;
    }
    currentQuestionIndex(currentQuestionIndex() + numberOfQuestions);
  };

  self.next = function () { questionNavigation(1); };
  self.previous = function () { questionNavigation(-1); };

  self.currentQuestion = ko.computed(function () {
    return self.questions()[currentQuestionIndex()];
  });

  //push the selected input radio value into an array

  //push the correct answer from the questions array into an array
  
  //compare the selected radio value and the questions array corrent answer

  //output the results

  // executed when the submit button is clicked
  self.submitQuiz = function(){

  };

};
ko.applyBindings(new QuizViewModel());