const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = "If there are 7 people, how many fingers are there total? ";
let correctAnswers = "70";
let candidateAnswers = " ";


let askforName = input.question("Please enter your name: "); 
  // TODO 1.1b: Ask for candidate's name //



let askQuestion = input.question("Who was the first American woman in space? ");
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log(askQuestion);



let gradeQuiz = input.question("Answer: ") 
console.log(gradeQuiz);
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = String(candidateAnswer)
  if (candidateAnswer != correctAnswer)
  console.log("Incorrect")
  return grade;


console.log(askforname);
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + askforName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};