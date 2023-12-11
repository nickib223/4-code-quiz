var startButton = document.querySelector("#start-button");
//querySelector targets HTML file elements
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#question-screen");
var currentQuestionIndex = 0;
var countDownTimer = document.querySelector("#timer");
var timeLeft = 60;
var correctAnswer = document.querySelector("#correct-answer");
var finalScore = document.querySelector("#final-score");
var highScores = document.querySelector("#high-scores");
// var scoreScreen = document.querySelector("#score-screen");

var questions = [
    {
        prompt:"What does querySelector refer to", 
        choices:["A: querySelector is a type of question that JavaScript asks the HTML.", 
        "B: querySelector returns the first element that matches a specified CSS selector in the document.", 
        "C: querySelector identifies an object in JavaScript.", 
        "D: querySelector is a type of high school math."],
        answer:"B: querySelector returns the first element that matches a specified CSS selector in the document.",
    },
    {
        prompt:"Which HTML element is used to denote JavaScript?", 
        choices:["A: <script>", "B: <js>", "C: <javascript>", "<jshtml>"],
        answer:"A: <script>",
    },  
    {
        prompt:"Where should JavaScript be linked in the HTML document?", 
        choices:["A: The bottom of <head>.", "B: In <header> only.", "C: The top of <footer>.", "D: The bottom of <body>."],
        answer:"D: The bottom of <body>.",
    },  
    {
        prompt:"What will the output of the following code be: var x=5; console.log(x++)", 
        choices:["A: 6", "B: undefined", "C: 5", "D: 51"],
        answer:"C: 5",
    },  
    {
        prompt:"What JavaScript keyword(s) can be used to assign a variable?", 
        choices:["A: var", "B: let", "C: const", "D: All of the above."],
        answer:"D: All of the above.",
    },  
    {
        prompt:"Which of the following is NOT a comparison operator in JavaScript", 
        choices:["A: <=", "B: =<", "C: ===", "D: !="],
        answer:"B: =<",
    },
    {
        prompt:"What does HTML stand for?", 
        choices:["A: Hyperlinks and Text Markup Language", "B: HyperText Markup Language", "C: HomeText Made Language", "D: HyperTax Made Language"],
        answer:"B: HyperText Markup Language"",
    },   
    {
        prompt:"What is zero-based indexing?", 
        choices:["A: A way of numbering in which the initial element of a sequence is assigned the index 0.", 
        "B: It assigns all elements of a sequence to 0.", 
        "C: A method for setting a timer in JavaScript", 
        "D: All of the above."],
        answer:"A: A way of numbering in which the initial element of a sequence is assigned the index 0.",
    },   
    {
        prompt:"What should an external Cascading Style Sheet (CSS) be referenced in HTML?", 
        choices:["A: <head>", "B: <body>", "C: <footer>", "D: After the JavaScript link."],
        answer:"A: <head>",
    },   
    {
        prompt:"What is the correct syntax for creating a function in JavaScript?", 
        choices:["A: fun exampleFunction()", "B: function = exampleFunction()", "C: function exampleFunction()", "D: funct exampleFunction{}"],
        answer:"function exampleFunction()",
    }   
]

function startGame(){
    startButton.classList.add("hide");
    countDownTimer.classList.remove("hide");
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
    correctAnswer.classList.remove("hide");
    if(event.target.value === questions[currentQuestionIndex].answer){
        correctAnswer.innerText = "That is correct! ";
    }else {
        correctAnswer.innerText = "That is incorrect. ";
        timeLeft = Math.max(0, timeLeft - 5);
    }

    correctAnswer.innerText += " Correct answer: " + questions[currentQuestionIndex].answer;
    currentQuestionIndex++; 
    displayQuestion();
}



function saveScore(){
    highScores.classList.remove("hide");
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
    
    showHighScores();
}

function showHighScores(){
    
    //retrieve scores that are saved in local storage
    var savedlocalScores = JSON.parse(localStorage.getItem("quizScores")) || [];

    //clear current list
    highScores.innerHTML = "";

    //create an HTML element for each score and append it to the highScores
    savedlocalScores.forEach(function(userScoreData) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = userScoreData.initials + userScoreData.score;
        highScores.appendChild(scoreItem);
    });
    console.log ("I'm being hidden!")
}

function endQuiz() {    
    countDownTimer.classList.add("hide");
    correctAnswer.classList.add("hide");
    questionScreen.classList.add("hide");
    finalScore.classList.add("hide");
    clearInterval(timeInterval);
    finalScore.innerText = "Final Score:" + timeLeft;
    saveScore();
    
    
}

startButton.addEventListener("click", function(){
    console.log("Clicked start button")
    startButton.classList.remove("hide");
    
    startGame();
})  

    //add 1 to currentQuestionIndex since it is a 0 index and .length starts at 1

        // todo: show result page hide question section and show results

        // startGame
        // runTimer
        // displayQuestion
        // checkAnswer
        // gameOver
        // saveScore
        // displayHighScore
