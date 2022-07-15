var readlineSync = require('readline-sync');

const chalk = require('chalk')

console.log(chalk.bold.bgRed("Welcome To Cricket Quiz ..."));

var username = readlineSync.question(chalk.green("\nPlease Enter Your Name : "));

console.log(chalk.italic.red("\nHello "+ username + " !"));

var score=0;
var questions = [{
    question :"\nHow many balls are there in an over ?\n",
    answer :"6"
},{
    question:"\nWhich team won the most ODI World Cup ?\n",
    answer :"australia"
},{
    question:"\nWhich Team won the First T20 World Cup ?\n",
    answer :"india"
},{
    question:"\nAgainst Which Team Sachin scored his 100th International Century ?\n",
    answer :"bangladesh"
},{
    question:"\nWhich Team has Played the Most number of ODI Matches ?\n",
    answer :"india"
}];

function quest(question,answer){
  var useranswer = readlineSync.question(question);
  if(useranswer.toLowerCase()===answer){
    console.log(chalk.bgGreen("You are Correct !!"));
    score=score+1;
  }
  else{
    console.log(chalk.bgRed("You are Wrong !!"));
  }
    console.log(chalk.bgGreen.blue.italic("\nYour score is " + score));
}
 function play(){
   for(var i=0;i<questions.length;i++){
     var mainquestion=questions[i];
    
     quest(mainquestion.question,mainquestion.answer)
   }
 }
play();
