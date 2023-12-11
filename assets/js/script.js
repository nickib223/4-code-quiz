var startButton = document.querySelector("#start-button");
//querySelector targets HTML file elements
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#quiz-container");
var currentQuestionIndex = 0;
var countDownTimer = document.querySelector("#timer");
var timeLeft = 60;
var correctAnswer = document.querySelector("#correct-answer");
var finalScore = document.querySelector("#final-score");
var saveScore = document.querySelector("#save-score");
//create a variable for any piece of the page that needs to be manipulated by JS
//{} connected to a variable = object
//.innerHTML clears any HTML inside the element

var questions = [
    {
        prompt:"What does querySelector refer to", 
        choices:["1", "2", "3", "4"],
        answer:"1",
    },
    {
        prompt:"What is a function", 
        choices:["5", "6", "7", "8"],
        answer:"8",
    },  
    {
        prompt:"How do I do any of this", 
        choices:["5", "6", "7", "8"],
        answer:"8",
    },  
    {
        prompt:"It's so hard", 
        choices:["5", "6", "7", "8"],
        answer:"8",
    },  
    {
        prompt:"Why did I pay money to be tortured", 
        choices:["5", "6", "7", "8"],
        answer:"8",
    },  
    {
        prompt:"This is so hard", 
        choices:["5", "6", "7", "8"],
        answer:"8",
    },
    {
        prompt:"Like really", 
        choices:["5", "6", "7", "8"],
        answer:"8",
    }   
]

startButton.addEventListener("click", function(){
    console.log("Clicked start button")
    startScreen.classList.add("hide");
    startGame();

    startButton.classList.add("hidden");
    console.log (startButton);
})    


function startGame(){
    startButton.addEventListener("click", function(){
        console.log("clicked");
        startScreen.classList.add("hide");
    })
    document.querySelector("#start-button").disabled = true;

    setTimer();
    displayQuestion();
}

function setTimer(){
    timeInterval = setInterval(function(){
        timeLeft--;
        countDownTimer.innerText = timeLeft;

        if (timeLeft < 1) {
            clearInterval(timeInterval);
            countDownTimer.innerText = "Sorry, your time is up!";
        }
    }, 1000)
}



//     timeInterval = setInterval(function() {
//     timeLeft--;
//     countDownTimer.innerText = timeLeft;

//     if (timeLeft < 1) {
//         clearInterval(timeInterval);
//         countDownTimer.innerText = "Time's Up!";
//     }
// }, 1000)


function displayQuestion(){
    if(currentQuestionIndex < questions.length) {
        questionScreen.classList.remove("hide");
        questionScreen.innerHTML = ""; 
        var promptEl = document.createElement("h2");

        promptEl.textContent = questions[currentQuestionIndex].prompt;
        questionScreen.append(promptEl);

        for (var i =0; i < 4; i++) {
            var button = document.createElement("button");
            button.textContent = questions[currentQuestionIndex].choices[i];
            button.value = questions[currentQuestionIndex].choices[i];
            button.addEventListener("click", checkAnswer);
            questionScreen.append(button);
        }
    }else {
        endQuiz();
    }
}

function checkAnswer(event) {
    if(event.target.value === questions[currentQuestionIndex].answer){
        correctAnswer.innerText = "That is correct! ";
    }else {
        correctAnswer.innerText = "That is incorrect. ";
        timeLeft = Math.max(0, timeLeft - 5);
    }

    correctAnswer.innerText += "  Correct answer: " + questions[currentQuestionIndex].answer;
// todo: show correct answer
    currentQuestionIndex++; 
    displayQuestion();
}

function endQuiz() {
        
    clearInterval(timeInterval);
    finalScore.innerText = "Final Score:" + timeLeft;

    console.log("quiz ended");
    
}

saveScore.addEventListener("click", function(){
    questionScreen.classList.add("hide");
})

    
// if (currentQuestionIndex < questions.length + 1) {
    //     console.log(event.target)


// clearInterval(timeInterval)
            // timeInterval.innerText = "Your score is" + timeLeft
            // return




//todo:paragraph correct-answer in quiz-container article

    //add 1 to currentQuestionIndex since it is a 0 index and .length starts at 1

        // todo: show result page hide question section and show results
        // TODO: return to stop quiz when questions are out - store scores
//variables
//functions      
//event listeners bottom

        // startGame
        // runTimer
        // displayQuestion
        // checkAnswer
        // gameOver
        // saveScore
        // displayHighScore
