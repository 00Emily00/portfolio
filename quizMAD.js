const quiz_questions = [ //Array of objects
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

/*********************************
 * Author: Emily Barrera
 * This function creates a template
 * literal
**********************************/
function createQuestion(quiz_question) {

    const question = document.createElement('div'); //this creates an empty element

    //Template Literal(template string)
    question.innerHTML = `<img src="${quiz_question.question}">
    <input class="mc" type="radio" name="${quiz_question.name}" value="${quiz_question.choices.a}"><p id="radiobt">${quiz_question.choices.a}</p><br>
    <input class="mc" type="radio" name="${quiz_question.name}" value="${quiz_question.choices.b}"><p id="radiobt">${quiz_question.choices.b}</p><br>
    <input class="mc" type="radio" name="${quiz_question.name}" value="${quiz_question.choices.c}"><p id="radiobt">${quiz_question.choices.c}</p>`
    return question;
}

/*********************************
 * Author: Emily Barrera
 * This function gets the JSON 
 * objects
**********************************/
function getElements() {
    const quizElement = document.getElementById("quiz");

    for(let i = 0; i <= quiz_questions.length - 1; i++) {
        quizElement.appendChild(createQuestion(quiz_questions[i]));
    }
}
getElements();

console.log(quiz_questions[2]);
/*********************************
 * Author: Emily Barrera
 * This function validates the
 * user input
**********************************/
function validateForm(form) {
    //should only contain letters
    let re = /^[a-zA-Z]*$/; 

    //validate email
    let valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    //Check if first name input is empty
    if(form.fname.value == "") {
        alert("First name must be filled");
        form.fname.focus();
        return false;
    }
    // Check if first name contains numbers
    if(!re.test(form.fname.value)) {
        alert("Name can only contain letters")
        form.fname.focus();
        return false;
    }
    //Check if last name input is empty
    if(form.lname.value == "") {
        alert("Last name must be filled");
        form.lname.focus();
        return false;
    }
    // Check if last name contains numbers
    if(!re.test(form.lname.value)) {
        alert("Last name can only contain letters")
        form.lname.focus();
        return false;
    }
    //Check if email input is empty
    if(form.email.value == "") {
        alert("Email must be filled");
        form.email.focus();
        return false;
    }
    //Check if input is a valid email
    if(!valEmail.test(form.email.value)) {
        alert("Email must be valid")
        form.email.focus();
        return false;
    }
    //Go to next page if there's not problems
        return true;
    
}

/*********************************
 * Author: Emily Barrera
 * Grades the correct answers
**********************************/
function gradeQuestions() {
    //give it a variable name to make it easier to understand
    let currentQuiz = document.forms[0]; 
    //keep score on correct answers
    let score = 0; 
    //go through the array / call check function
    quiz_questions.forEach(question => { 
        score += check(question.correct, currentQuiz[question.name]);
    });

    //display after button is clicked
    document.getElementById('results').innerHTML = 
    "You got " + score + " correct! Congratulations!<br> Keep trying until you get all of them right!";
}

/*********************************
 * Author: Emily Barrera
 * Checks if name = correct answer
 * and checks if it has been selected
**********************************/
function check(correctAnswer, results) {
    //debugging
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