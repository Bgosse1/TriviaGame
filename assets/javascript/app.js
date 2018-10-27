$(document).ready(function () {
    var timer = {
        startNumber: 20,
        intervalId: '',
        run: function () {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(this.decrement, 1000);
        },
        decrement: function () {
            timer.startNumber--;
            $("#timerNum").html("<span>" + timer.startNumber + "</span>");
            if (timer.startNumber === 0) {
                this.stop();
                triviaGame.checkUserAnswer();
            }
        },
        stop: function () {
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
        init: function () {
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
            $("#timer").append(timerNum);
            $("#timerNum").html("<span>" + timer.startNumber + "</span>");
            var i = 0;
            $.each(questions, function () {
                i++;
                var displayQuestions = $("<p>");
                var btnGroup = $('<div>');
                btnGroup.attr("class", "btn-group btn-group-toggle mb-5");
                btnGroup.attr("data-toggle", "buttons");
                $.each(this, function (name, value) {
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
                            radio.attr("name", "answer" + i);
                            radio.attr("id", this);
                            radio.attr("value", this);
                            radio.attr("autocomplete", "off");
                            label.text(this)
                            label.append(radio);
                            btnGroup.append(label);
                        });
                    }
                });
            });
            var doneBtnDiv = $("<div>");
            var doneBtn = $("<button>");
            doneBtn.attr("class", "btn btn btn-outline-primary btn-lg");
            doneBtn.text("Done");
            doneBtn.attr("id", "Done");
            doneBtnDiv.append(doneBtn);
            console.log($("#Done"));
            $(doneBtn).on('click', function() {
                console.log("here");
                triviaGame.checkUserAnswer();
              });
            
            $("#questions").append(doneBtnDiv);

        },
        checkUserAnswer: function () {
            const totalQuestions = 8
            var answeredCorrectly = 0;
            var answeredIncorrectly = 0;
            $.each($("input[name='answer1']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_one.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer2']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_two.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer3']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_three.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer4']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_four.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer5']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_five.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer6']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_six.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer7']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_seven.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $.each($("input[name='answer8']:checked"), function () {
                var selectedAnswer = $(this).val();
                if (selectedAnswer === questions.question_eight.answer) {
                    answeredCorrectly++;
                }
                else {
                    answeredIncorrectly++;
                }
            });
            $("#questions").hide();
            var unanswered = totalQuestions - (answeredCorrectly + answeredIncorrectly);
            var resultsCorrect = $("<div>");
            var resultsIncorrect = $("<div>");
            var resultsUnanswered = $("<div>");
            resultsCorrect.html("<h2>Correct Answers: " + answeredCorrectly + "</h2>");
            resultsIncorrect.html("<h2>Incorrect Answers: " + answeredIncorrectly + "</h2>");
            resultsUnanswered.html("<h2>Unanswered: " + unanswered + "</h2>");
            $("#display").append(resultsCorrect);
            $("#display").append(resultsIncorrect);
            $("#display").append(resultsUnanswered);
            var resetBtnDiv = $("<div>");
            var resetBtn = $("<button>");
            resetBtn.attr("class", "btn btn btn-outline-primary btn-lg");
            resetBtn.attr("type", "button");
            resetBtn.text("Restart");
            resetBtn.attr("id", "reset");
            resetBtnDiv.append(resetBtn);
            $("#display").append(resetBtnDiv);
            $(resetBtn).on('click', function() {
                location.reload();
              });
            
        }
    };
    $("#start").on('click', triviaGame.init);
});

