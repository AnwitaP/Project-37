var canvas, backgroundImg;

var gameState = 0;
var contestantCount;
var database;
var allContestants;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(900,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
