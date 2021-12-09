var readlineSync=require('readline-sync');
console.log("Welcome to the T20 Worldcup-Quiz")
console.log("---------------")
console.log("Each right answer will give you  +1")
console.log("Answer with a,b,c,d ");
var userName=readlineSync.question("Enter your name  ");
var score=0;
function quiz(question,answer){
   var userAnswer=readlineSync.question(question)
   if(userAnswer===answer){
     console.log("The answer is right")
     score++;
   }
   else{
     console.log("The answer is wrong")
   }
   console.log("Your score is: "+ score)
   console.log("---------\n")

}
var questions=[
  firstQuestion={question:"1. India is a federal union comprising twenty-eight states and how many union territories?\na.6\nb.7\nc.8\nd.4\n.Your answer :",
  answer:"c"


  },
  secondQuestion={
    question:"2. Which of the following is the capital of Arunachal Pradesh?\na.itanagar\nb.dispur\nc.imphal \nd.patna\n.Your answer:",
  answer:"a"


  },
  thirdQuestion={question:"3. What are the major languages spoken in Andhra Pradesh?\nA. Odia and Telugu\n B. Telugu and Urdu \nC. Telugu and Kannada\n D. All of the above languages\n.Your answer:",
  answer:"b"


  },
  fourthQuestion={question:" 4. What is the state flower of Haryana?\nA. Lotus\nB. Rhododendron\nC. Golden Shower\nD. Not declared\n.Your answer:",
  answer:"a"


  },
  fifthQuestion={question:"5. Which of the following states is not located in the North? \nA. Jharkhand\nB. Jammu and Kashmir\nC. Himachal Pradesh \nD. Haryana\n.Your answer:",
  answer:"a"
  }
]
for(i=0;i<questions.length;i++){
   var currentQuestion=questions[i]
   quiz(currentQuestion.question,currentQuestion.answer)
}

console.log("Your final Score is : " + score)
