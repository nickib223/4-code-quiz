var startButton = document.querySelector("#start-button");
//querySelector targets HTML file elements
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#quiz-container");
var currentQuestionIndex = 0;
var countDownTimer = document.querySelector("#timer");
var timeLeft = 60;
var correctAnswer = document.querySelector("#correct-answer");
var finalScore = document.querySelector("#final-score");
var saveScoreButton = document.querySelector("#save-score");

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

  


function startGame(){
    document.querySelector("#start-button").disabled = true;
    
    setTimer();
    displayQuestion();
    // startScreen.classList.add("hide");
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
    currentQuestionIndex++; 
    displayQuestion();
}

function endQuiz() {
        
    clearInterval(timeInterval);
    finalScore.innerText = "Final Score:" + timeLeft;

    console.log("quiz ended");
    
}

function saveScore(){
    var userInitials = prompt("Please enter your initials: ");

    if (userInitials) {
        //Save the current game's initials/score to local storage
        var userScoreData = {
            initials: userInitials,
            score: timeLeft
        };

        //retrieve any previously stored scores from local storage
        var localScores = JSON.parse(localStorage.getItem("quizScores")) || [];

        //add current score to local storage list
        localScores.push(userScoreData);

        //save existing and updated scores back to local storage
        localStorage.setItem("quizScores", JSON.stringify(localScores));

        //let user know the information was saved
        alert("User initials and score successfully saved.");
    }else{
        alert("Something went wrong. Score not saved. Please re-enter your initials.");
    }

}

function displayScores(){

}

startButton.addEventListener("click", function(){
    console.log("Clicked start button")
    
    startGame();
})  

saveScoreButton.addEventListener("click", saveScore);

    //add 1 to currentQuestionIndex since it is a 0 index and .length starts at 1

        // todo: show result page hide question section and show results

        // startGame
        // runTimer
        // displayQuestion
        // checkAnswer
        // gameOver
        // saveScore
        // displayHighScore
