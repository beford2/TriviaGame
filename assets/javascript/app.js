var time = 11;
var score = 0;
var intervalID;
timeUp = false;
i = 0;
var questions = ["Who was Luke's father?",
                "Who is the captain of the Millennial Falcon?",
                "What crystal powers the Jedi Lightsaber?",
];
var answers = [
    ["Darth Maul", "Darth Vader", "Darth Sidious", "Jar Jar Binks"],
    ["Chewie", "Princess Leah", "Han Solo", "Luke Skywalkder"],
    ["Kyber Crystal", "Ruby Crystal", "Saphire Crystal", "Diamond Crystal"]
];

var correctAnswers = ["Darth Vader", "Han Solo", "Kyber Crystal"];

triviaGame = {


    setupGame: function(){

        $(document).on("click", "#start", function(){
            $("#start").remove();
            $("#countdown, #question, #btn1, #btn2, #btn3, #btn4").css("visibility" , "visible");
            
            triviaGame.run();
            
        });

        

    },

    run: function(){

        
        triviaGame.nextQuestion();
        if(!timeUp){
            intervalID = setInterval(triviaGame.countDown, 1000);
            timeUp = true;
        }
        
        
    },

    countDown: function(){

        time--;
        $("#time").text(time);
        triviaGame.answerCheck();
        if(time == 0){
            timeUp = false;
            time = 11;
            i++;
            triviaGame.nextQuestion();
        } 

        
    },

    nextQuestion: function(){

        if(i > questions.length -1 && i > answers.length -1){
            clearInterval(intervalID);
            $(".row").remove();
            $("p").remove();
            var scoreTitle = $("<h3>").text("Score: " + score);
            scoreTitle.appendTo(".jumbotron");


        }
        else{
            $("#question").text(questions[i]);
            $("#btn1").text(answers[i][0]);
            $("#btn2").text(answers[i][1]);
            $("#btn3").text(answers[i][2]);
            $("#btn4").text(answers[i][3]);
            triviaGame.countDown();
        }
        
        
    },

    answerCheck: function(){

        
        $("body").unbind().on("click", "#btn1", function(){
            
            ans = $(this).text();
            console.log(ans);
            console.log(i);
            console.log(correctAnswers[i]);
            if(ans == correctAnswers[i]){
                i++;
                score += 10;
                time = 11;
                
                triviaGame.nextQuestion();
           }
           else{
               
           }


        });
        $("body").on("click", "#btn2", function(){
            
            ans = $(this).text();
            console.log(ans);
            console.log(i);
            console.log(correctAnswers[i]);
            if(ans == correctAnswers[i]){
                i++;
                score += 10;
                time = 11;
                
                triviaGame.nextQuestion();
           }
           else{
                
            }
        });
        $("body").on("click", "#btn3", function(){
            
            ans = $(this).text();
            console.log(ans);
            console.log(i);
            console.log(correctAnswers[i]);
            if(ans == correctAnswers[i]){
                i++;
                score += 10;
                time = 11;
                
                triviaGame.nextQuestion();
            }
            else{
                
            }
        });
        $("body").on("click", "#btn4", function(){
            
            ans = $(this).text();
            console.log(i);
            console.log(ans);
            console.log(correctAnswers[i]);
            if(ans == correctAnswers[i]){
                i++;
                score += 10;
                time = 11;
                triviaGame.nextQuestion();
            }
            else{
               
            }
        });

    },

    answerRight: function(){
        $(".row").remove();
        $("p").remove();
        timeUp = false;
        triviaGame.countDown();
        if(time == 0){
            var solutionTitle = $("<h3>").text("Your answer was correct");
            solutionTitle.appendTo(".jumbotron");
        }
        
        
    },

    answerWrong: function(){
        $(".row").remove();
        $("p").remove();
        triviaGame.countDown();
        var solutionTitle = $("<h3>").text("Your answer was wrong");
        solutionTitle.appendTo(".jumbotron");
        if(time == 0){
            triviaGame.nextQuestion();
        }
    }

};



triviaGame.setupGame();