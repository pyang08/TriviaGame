$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainScreen").html(startScreen);
    }
    
    initialScreen();
    
    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
        // clickSound.play();
        generateHTML();
    
        timerWrapper();
    
    }); // Closes start-button click
    
    $("body").on("click", ".answer", function(event){
        //answeredQuestion = true;
        // clickSound.play();
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            //alert("You are correct");
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            //alert("You are wrong!");
            clearInterval(theClock);
            generateLoss();
        }
    }); // Close .answer click
    
    $("body").on("click", ".reset-button", function(event){
        clickSound.play();
        resetGame();
    }); // Closes reset-button click
    
    });  //  Closes jQuery wrapper
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainScreen").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainScreen").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainScreen").html(gameHTML);
        setTimeout(wait, 4000)
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainScreen").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 9) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainScreen").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["What band sings the opening credits song?", 
    "Which country does Chandler tell Janice he’s moving to?", 
    "How many failed marriages does Ross have during the series?",
    "What are Phoebe's triplets' names?", 
    "How many categories for towels does Monica have?",
    "What fruit is Ross allergic to?",
    "Which guest won an Emmy for his/her performance?", 
    "Which famous person does Phoebe believe is her grandfather?",
    "Which “Friends” star was the only one to kiss all of the other cast members during the course of the ten seasons?",
    "Gunther once played the character Bryce on All My Children but his character died. What caused his demise?",];
    var answerArray = [
    ["Hanson Brothers", "Hootie and The Blowfish", "Pearl Jam", "The Rembrandts"],
    ["Turkey", "Yemen", "Mexico", "Peru"],
    ["3", "2", "4", "1"],
    ["Frank Jr., Joey, Maddie", "Frank Jr., Chandler, Joey", "Frank Jr., Katie, Chandler", "Frank Jr., Chandler, Leslie"],
    ["8", "7", "11","23"],
    ["Kiwi", "Banana", "Strawberries", "Lemon"],
    ["Brad Pitt", "Christina Applegate", "Reese Witherspoon", "Adam Goldberg"],
    ["Albert Einstein", "Morgan Freeman", "Christopher Walken", "Marlon Brando"],
    ["Ross", "Monica", "Rachel", "Phoebe"],
    ["Fell off a cliff", "Heart attack", "Electrocuted", "Buried in an avalanche"],
    ];

    var correctAnswers = ["D. The Rembrandts", 
    "B. Yemen", 
    "A. 3", 
    "D. Frank Jr., Chandler, Leslie", 
    "C. 11", 
    "A. Kiwi", 
    "B. Christina Applegate", 
    "A. Albert Einstein",
     "C. Rachel",
    "D. Buried in an avalanche",
    ];

    var imageArray = [
    "<img class='center-block img-right' src='assets/images/image1.jpg'>", 
    "<img class='center-block img-right' src='assets/images/image2.jpg'>", 
    "<img class='center-block img-right' src='assets/images/image3.gif'>", 
    "<img class='center-block img-right' src='assets/images/image4.jpg'>",
    "<img class='center-block img-right' src='assets/images/image5.gif'>",
    "<img class='center-block img-right' src='assets/images/image6.gif'>",
    "<img class='center-block img-right' src='assets/images/image7.jpg'>",
    "<img class='center-block img-right' src='assets/images/image8.gif'>",
    "<img class='center-block img-right' src='assets/images/image9.gif'>",
    "<img class='center-block img-right' src='assets/images/image10.gif'>",
];

    
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound = new Audio("sound/button-click.mp3");