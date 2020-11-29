const readlineSync=require('readline-sync');
var userName=readlineSync.question('Whats your name ? ');

var score=0;

console.log('Welcome ' + userName +' Do you know MASUM? ');

function play(question,answer)
{
  userAnswer=readlineSync.question(question);

  if(userAnswer===answer)
  {
    score=score+1;
    console.log("Right!");
  }

  else
  {
    console.log('Wrong!');
  }

  console.log('current score ' + score);
  console.log("-----------");
}

questions=[{
  question:"Where do i live ?",

  answer:"assam"
},

{
  question:"What would my favourite cartoon chacter be ?",

  answer:"jerry"
},

{
  question:"What would i choose between food,sleep,and study?",

  answer:"food"
},

{
  question:"Masum would go for sugar or savouries?",

  answer:"sugar"
},
]
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];

  play(currentQuestion.question,currentQuestion.answer);

}

console.log("your score is " + score);
