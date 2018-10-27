const quiz_questions = [
    { 
        question: 'gorilla.jpg',
        name: 'gorilla',
        choices: {
            a: 'gorilla',
            b: 'zebra',
            c: 'lion' 
        },
        correct: 'gorilla'
    },
    {
        question: 'giraffe1.jpg',
        name: 'giraffe',
        choices: {
            a: 'monkey',
            b: 'horse',
            c: 'giraffe'
        },
        correct: 'giraffe'
    },
    {
        question: 'cow.jpg',
        name: 'cow',
        choices: {
            a: 'chicken',
            b: 'bear',
            c: 'cow'
        },
        correct: 'cow'
    },
    {
        question: 'tiger.jpg',
        name: 'tiger',
        choices: {
            a: 'tiger',
            b: 'wolf',
            c: 'lion'
        },
        correct: 'tiger'
    },
    {
        question: 'horse.jpg',
        name: 'horse',
        choices: {
            a: 'elephant',
            b: 'horse',
            c: 'gorilla'
        },
        correct: 'horse'
    },
    {
        question: 'parrot.jpg',
        name: 'parrot',
        choices: {
            a: 'parrot',
            b: 'cat',
            c: 'dog'
        },
        correct: 'parrot'
    },
    {
        question: 'buffalo.jpg',
        name: 'buffalo',
        choices: {
            a: 'cow',
            b: 'horse',
            c: 'buffalo'
        },
        correct: 'buffalo'
    },
    {
        question: 'skunk.jpg',
        name: 'skunk',
        choices: {
            a: 'turtle',
            b: 'skunk',
            c: 'chicken'
        },
        correct: 'skunk'
    },
    {
        question: 'cat.jpg',
        name: 'cat',
        choices: {
            a: 'tiger',
            b: 'wolf',
            c: 'cat'
        },
        correct: 'cat'
    },
    {
        question: 'wolf.jpg',
        name: 'wolf',
        choices: {
            a: 'wolf',
            b: 'lion',
            c: 'cat'
        },
        correct: 'wolf'
    },
    {
        question: 'elephant.jpg',
        name: 'elephant',
        choices: {
            a: 'zebra',
            b: 'monkey',
            c: 'elephant'
        },
        correct: 'elephant'
    },
    {
        question: 'monkey1.jpg',
        name: 'monkey',
        choices: {
            a: 'gorilla',
            b: 'fish',
            c: 'monkey'
        },
        correct: 'monkey'
    },
    {
        question: 'turtle.jpg',
        name: 'turtle',
        choices: {
            a: 'parrot',
            b: 'turtle',
            c: 'fish'
        },
        correct: 'turtle'
    },
    {
        question: 'zebra.jpg',
        name: 'zebra',
        choices: {
            a: 'horse',
            b: 'buffalo',
            c: 'zebra'
        },
        correct: 'zebra'
    },
    {
        question: 'bears.jpg',
        name: 'bear',
        choices: {
            a: 'bear',
            b: 'tiger',
            c: 'zebra'
        },
        correct: 'bear'
    },
    {
        question: 'chicken.jpg',
        name: 'chicken',
        choices: {
            a: 'turtle',
            b: 'chicken',
            c: 'skunk'
        },
        correct: 'chicken'
    },
    {
        question: 'dog.jpg',
        name: 'dog',
        choices: {
            a: 'cat',
            b: 'fish',
            c: 'dog'
        },
        correct: 'dog'
    },
    {
        question: 'fish.jpg',
        name: 'fish',
        choices: {
            a: 'fish',
            b: 'turtle',
            c: 'dog'
        },
        correct: 'fish'
    },
    {
        question: 'lion.jpg',
        name: 'lion',
        choices: {
            a: 'cat',
            b: 'tiger',
            c: 'lion'
        },
        correct: 'lion'
    },


];

function createQuestion(quiz_question) {

    const question = document.createElement('div'); //this creates an empty element
    question.innerHTML = `<img src="${quiz_question.question}">
    <input class="mc" type="radio" name="${quiz_question.name}" value="${quiz_question.choices.a}"><p>${quiz_question.choices.a}</p><br>
    <input class="mc" type="radio" name="${quiz_question.name}" value="${quiz_question.choices.b}"><p>${quiz_question.choices.b}</p><br>
    <input class="mc" type="radio" name="${quiz_question.name}" value="${quiz_question.choices.c}"><p>${quiz_question.choices.c}</p>`
    return question;
}

function getElements() {
    const quizElement = document.getElementById("quiz");

    for(let i = 0; i <= quiz_questions.length - 1; i++) {
        quizElement.appendChild(createQuestion(quiz_questions[i]));
    }
}

getElements();

console.log(quiz_questions[2]);


function gradeQuestions() {
    let currentQuiz = document.forms[0]; //give it a variable to make it easier to understand
    let score = 0; //keep score on correct answers
    quiz_questions.forEach(question => { //go through the array
        score += check(question.correct, currentQuiz[question.name]);
    });

    document.getElementById('results').innerHTML = "You got " + score + " correct! Congratulations!";
}

function check(correctAnswer, results) {

    console.log(document.forms[0]['gorilla']);

    for(let i = 0; i < results.length; i++) { 
        if(results[i].value == correctAnswer) {
            if(results[i].checked == true) {
                return 1;
            }
            else
                return 0;
        }
    }
    
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]['lname'].value;
    let z = document.forms['myForm']['email'].value;


    if (x == "") {
        alert("First name must be filled out and can't contain numbers");
        return false;
    }
    else if (y == "") {
        alert("Last name must be filled out and can't contain numbers");
        return false;
    }
    else if (z == "") {
        alert("Email must be filled out or is invalid");
            return false;
    }
    else
        return true;
}







// let _quiz = document.getElementById('quiz');
// let _submit = document.getElementById('submit');
// let _results = document.getElementById('results');

//     // let messages = ["Great job!", "That's just okay", "You really need to do better."];

//     // let range;

//     //     if (correct < 1){
//     //         range = 2;
//     //         console.log("1 correct answers");
//     //     }
//     //     if (correct > 0 && correct < 3) {
//     //         range = 1;
//     //         console.log("2 correct answers");
//     //     }
//     //     if (correct > 2) {
//     //         range = 0;
//     //         console.log("3 correct answers");
//     //     }
    
//     document.getElementById("after_submit").style.visibility = "visible";

//    // document.getElementById("message").innerHTML = messages[range];
//     document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
// }
// let answers = quizContainer.querySelectorAll('.${quiz_question.choices}');
//     let userAnswers = '';
//     let numCorrect = 0;

//     for (let i = 0; i < quizQuestion.length; i++) {
//         userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
//         if(userAnswer===questions[i].correctAnswer){
//             // add to the number of correct answers
//             numCorrect++;
//         }
//     }