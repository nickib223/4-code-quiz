var startButton = document.querySelector("#start-button");
//querySelector targets HTML file elements
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#quiz-container")
var currentQuestionIndex = 0
var countDownTimer = document.querySelector("#timer")
var timeLeft = 60
var correctAnswer = document.querySelector("#correct-answer")
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
    }  
]

console.log(startButton, startScreen)
startButton.addEventListener("click", function(){
    startScreen.classList.add("hide");
    displayQuestion()

var timeInterval = setInterval(function() {
    timeLeft--
    countDownTimer.innerText = timeLeft

    if (timeLeft < 1) {
        clearInterval(timeInterval)
        countDownTimer.innerText = "Time's Up!"
    }
}, 1000)

})

function displayQuestion(){
    console.log(currentQuestionIndex)
    questionScreen.classList.remove("hide")
    questionScreen.innerHTML = ""  
    var promptEl = document.createElement("h2")

    promptEl.textContent = questions[currentQuestionIndex].prompt
    questionScreen.append(promptEl)

    for (var i =0; i < 4; i++) {
        var button = document.createElement("button")
        button.textContent = questions[currentQuestionIndex].choices[i]
        button.value = questions[currentQuestionIndex].choices[i]
        button.addEventListener("click", checkAnswer)
        questionScreen.append(button)
    }
}

function checkAnswer(event) {
        if(event.target.value === questions[currentQuestionIndex].answer){
            correctAnswer.innerText = "That is correct!"
            console.log("correct")
        }else {
            correctAnswer.innerText = "That is incorrect."
            timeLeft = timeLeft - 5
            console.log("incorrect")}
// todo: show correct answer
        currentQuestionIndex++; 
        console.log(currentQuestionIndex);
        displayQuestion();
}

function endQuiz() {

}
    
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