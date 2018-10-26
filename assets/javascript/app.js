$(document).ready(function () {
    var timer = {
        startNumber: 120,
        intervalId: '',
        run: function () {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(this.decrement, 1000);

        },
        decrement: function () {

            //  Decrease number by one.
            timer.startNumber--;


            $("#timerNum").html("<span>" + timer.startNumber + "</span>");

            //  Show the number in the #show-number tag.
            //$("#timer").html("<h2>" + timer.startNumber + "</h2>");


            //  Once number hits zero...
            if (timer.startNumber === 0) {

                //   //  ...run the stop function.
                this.stop();

                //  Alert the user that time is up.
                alert("Time Up!");
            }
        },
        stop: function () {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(this.intervalId);
        }
    };
    var questions = {
        question_one: {
            question: "What was the first full length CGI movie?",
            choices: ["A Bug's Life", "Monsters Inc", "Toy Story", "The Lion King"],
            answer: "Toy Story",
        },
        question_two: {
            question: "Which of these is NOT a name of one of the Spice Girls?",
            choices: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
            answer: "Fred Spice",
        },
        question_three: {
            question: "Which NBA team won the most titles in the 90s?",
            choices: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
            answer: "Chicago Bulls",
        },
        question_four: {
            question: 'Which group released the hit song, "Smells Like Teen Spirit"?',
            choices: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
            answer: "Nirvana",
        },
        question_five: {
            question: 'Which popular Disney movie featured the song, "Circle of Life"?',
            choices: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
            answer: "The Lion King",
        },
        question_six: {
            question: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the license plate said..."',
            choices: ["Dice", "Mirror", "Fresh", "Cab"],
            answer: "Fresh",
        },
        question_seven: {
            question: "What was Doug's best friend's name?",
            choices: ["Skeeter", "Mark", "Zach", "Cody"],
            answer: "Skeeter",
        },
        question_eight: {
            question: "What was the name of the principle at Bayside High in Saved By The Bell?",
            choices: ["Mr.Zhou", "Mr.Diggers", "Mr.Belding", "Mr.Page"],
            answer: "Mr.Belding",
        }
    };
    var triviaGame = {
        get correctAnswers() {
            return this._correctAnswers;
        },
        set correctAnswers(correctAnswers) {
            this._correctAnswers = correctAnswers;
        },
        get incorrectAnswers() {
            return this._incorrectAnswers;
        },
        set correctAnswers(incorrectAnswers) {
            this._incorrectAnswers = incorrectAnswers;
        },
        get unanswered() {
            return this._unanswered;
        },
        set correctAnswers(unanswered) {
            this._unanswered = unanswered;
        },
        init: function () {
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            this.unanswered = 0;
            $("#start").hide();
            triviaGame.loadGame();
            timer.run();
        },
        loadGame: function () {
            var timerText = $("<span>");
            timerText.attr("id", "timer");
            timerText.text("Time Remaing: ");
            $("#questions").append(timerText);
            var timerNum = $("<span>");
            timerNum.attr("id", "timerNum");
            //timerNum.text(timer.startNumber);
            $("#timer").append(timerNum);
            $("#timerNum").html("<span>" + timer.startNumber + "</span>");

            $.each(questions, function () {
                var displayQuestions = $("<p>");
                var btnGroup = $('<div>');
                btnGroup.attr("class", "btn-group btn-group-toggle mb-5");
                btnGroup.attr("data-toggle", "buttons");

                $.each(this, function (name, value) {
                    //console.log(name + '=' + value);
                    if (name == "question") {
                        displayQuestions.text(value);

                        $("#questions").append(displayQuestions);
                        $("#questions").append(btnGroup);
                    }
                    else if (name == "choices") {
                        $.each(this, function () {
                            var label = $('<label>');
                            label.attr("class", "btn btn-light");
                            var radio = $('<input>');
                            radio.attr("type", "radio");
                            radio.attr("name", "options");
                            radio.attr("id", this);
                            radio.attr("autocomplete", "off");
                            label.text(this)
                            label.append(radio);
                            btnGroup.append(label);
                        });

                    }
                });
            });
        },
    };
    $("#start").on('click', triviaGame.init);
    //console.log(timer.startNumber);


});



// startGame: function(){
//     // restarting game results

//     clearInterval(trivia.timerId);

//     // show game section
//     $('#game').show();

//     //  empty last results
//     $('#results').html('');

//     // show timer
//     $('#timer').text(trivia.timer);

//     // remove start button
//     $('#start').hide();

//     $('#remaining-time').show();

//     // ask first question
//     trivia.nextQuestion();

// },