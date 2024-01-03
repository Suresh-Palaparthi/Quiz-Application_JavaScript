function Question(questionText){
    this.questionText = questionText;
}

const question1= new Question("JavaScript supports");
const question2 = new Question("Which language is used for styling web pages ?");
const question3 = new Question("Which is not a JavaScript framework ?");
const question4 = new Question("Which is used to connect to Database ?");
const question5 = new Question("JavaScript is a ?");

function AnswerOption(answerText){
    this.answerText = answerText;
}

const AnswerOptionHTML = new AnswerOption("HTML");
const answerOptionFunctions = new AnswerOption("Functions");
const answerOptionXHTML = new AnswerOption("XHTML");
const answerOptionCSS = new AnswerOption("CSS");
const answerOptionjQuery = new AnswerOption("JQuery");
const answerOptionXML = new AnswerOption("XML");
const answerOptionPythonScript = new AnswerOption("Python Script");
const answerOptionDjango = new AnswerOption("Django");
const answerOptionNodeJS = new AnswerOption("Node JS");
const answerOptionPHP = new AnswerOption("PHP");
const answerOptionJS = new AnswerOption("JS");
const answerOptionAll = new AnswerOption("All");
const answerOptionLanguage = new AnswerOption("Language");
const answerOptionProgrammingLanguage = new AnswerOption("Programming Language");
const answerOptionDevelopment = new AnswerOption("Development");

function QuestionAnswerOptionPair(question,answerOptions,correctAnswer){

    this.question = question;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;

    function isCorrectAnswer(userSuppliedAnswer){

        if(userSuppliedAnswer==correctAnswer){
            console.log("correctAnswer");
        }
        else{
            console.log("Incorrect Answer");
        }
    }
}


function QuizApplication(qaPair){

    
}
