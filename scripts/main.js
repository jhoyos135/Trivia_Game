let questionCounter = 0;
let selecterAnswer;
let clock;
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let openScreen;
let gameHTML;
let counter = 10;
let main = document.querySelector('#main');

class UI {

    // timeout display
    static timeout() {
        unanswered++;
        gameHTML = `

        <p class='text-center timer-p'>
            Time Remaining: <span class='timer'> ${counter} </span>
        </p>
        <p class='text-center'>You ran out of time! The correct answer was:
        ${correctAnswers[questionCounter]} </p>
        <img class='center-block img-wrong' src='../assets/images/time.gif'>

        `
        main.innerHTML = gameHTML;
        setTimeout(Helper.wait, 3000);

    };

    // win display
    static win() {
        correct++;
        gameHTML = `

        <p class='text-center timer-p'>
            Time Remaining: <span class='timer'> ${counter} </span>
        </p>
        <p class='text-center'> 
        Correct! The answer is: ${correctAnswers[questionCounter]} </p>
        ${imageArray[questionCounter]}

        `
        main.innerHTML = gameHTML;
        setTimeout(Helper.wait, 3000);

    };

    // loss display 
    static loss() {
        incorrect++;
        gameHTML = `

        <p class='text-center timer-p'>
        Time Remaining: <span class='timer'> ${counter} </span>
        </p>
        <p class='text-center'>Sorry! The correct answer is:
        ${correctAnswers[questionCounter]}</p>
        <img class='center-block img-wrong' src='../assets/images/x.gif'>

        `
        main.innerHTML = gameHTML;
        setTimeout(Helper.wait, 3000);

    };

    // get the questions array with the answers
    static questions() {
        gameHTML = `

        <p class='text-center timer-p'>
            Time Remaining: <span class='timer'>10</span>
        </p>

        <p class='text-center'>${questionArray[questionCounter]}</p>
        <p class='first-answer answer'>A. ${answerArray[questionCounter][0]}</p>
        <p class='answer'>B. ${answerArray[questionCounter][1]}</p>
        <p class='answer'>C. ${answerArray[questionCounter][2]}</p>
        <p class='answer'>D. ${answerArray[questionCounter][3]}</p>

        `;
        main.innerHTML = gameHTML;
        
    };
    
    // final display with all the results and reset button
    static final() {
        gameHTML = `
        
        <p class='text-center mt-5'>All done, here's how you did!</p>
            <p class='summary-correct'>Correct Answers: ${correct} </p>
            <p> Wrong Answers: ${incorrect} </p>
            <p> Unanswered: ${unanswered} </p>
        <p class='text-center reset-button-container'>
            <a class='btn btn-danger btn-md btn-block reset-button' href='#' role='button'>
            Reset
            </a>
        </p>

        `
        main.innerHTML = gameHTML;
        Helper.reset();

    };

    // answer click event
    static screen() {
        document.querySelectorAll('.answer').forEach( (answer) => {
            answer.addEventListener('click', (e) => {

                let target = e.target.textContent;
                selecterAnswer = target;

                if(selecterAnswer === correctAnswers[questionCounter]) {
                    clearInterval(clock);
                    UI.win();
                } else {
                    clearInterval(clock);
                    UI.loss();
                }
                
            });
        });    
    }
}

class Helper {

    // reset function
    static reset() {
        let reset_button = document.querySelector('.reset-button');
        reset_button.addEventListener('click', () => {
            questionCounter = 0;
            correct = 0;
            incorrect = 0;
            unanswered = 0;
            counter = 10;
            Helper.timer();
            UI.questions();
            UI.screen();
        });
    }

    // sets up the time function
    static wait() {
        if(questionCounter < questionArray.length - 1 ) {
            questionCounter++;
            UI.questions();
            counter = 10;
            Helper.timer();
            UI.screen();
        } else {
            UI.final();
        }
    };

    // timer function
    static timer() {
        clock = setInterval(tenSeconds, 1000);
    
        function tenSeconds() {
            if (counter === 0) {
                clearInterval(clock);
                UI.timeout();
            }
            if (counter > 0) {
                counter--;
            }
    
            document.querySelector('.timer').innerHTML = counter
        }  
    };

}

document.addEventListener('DOMContentLoaded', () => {

    let open = () => {
        openScreen = `
        
        <p class='text-center main-button-container'>
            <a class='btn btn-success btn-md btn-block start-button' href='#' role='button'>
                Start
            </a>
        </p>

        `

        main.innerHTML = openScreen;   
    };

    open();

    //start click event
    let start = document.querySelector('.start-button');
    let jumbo = document.querySelector('.jumbotron');
    start.addEventListener('click', function(e) {

        e.preventDefault();
        jumbo.classList.add('hide');

        UI.questions();
        Helper.timer();
        UI.screen();

    });

});

const questionArray = 
    [ "What is the name of Will Smith’s character in Independence Day?", 
    "Which 1997 film stars Nicolas Cage, John Cusack, and John Malkovich?", 
    "How many people were killed in the 1996 film Scream?", 
    "What year was Forrest Gump released?", 
    "Who is Keyser Soze in the film The Usual Suspects?", 
    "Which artist sang the song “Oh, Pretty Woman” from the film Pretty Woman?", 
    "Which 90’s movie featured the Looney Tunes?", 
    "Which 90’s movie soundtrack is the best-selling soundtrack of all time?" ];

const answerArray = [
        ["Captain John Hiller", "Captain Steven Johnson", "Captain Steven Hiller", "Captain Steve John"], 
        ["FaceOff","The Rock","Con Air","Fire Birds"], 
        ["Five", "Seven", "One", "Four"], 
        ["1992", "1994", "1990", "1999"], 
        ["Robert", "Roger", "Raul", "Roy"], 
        ["John Orbison","Paul Orbison","Roy Orbison","Mike Orbison"], 
        ["Cool World", "Who Framed Roger Rabbit", "Space Jam", "Back in Action"], 
        ["The Bodyguard","Pulp Fiction","Clueless","Armageddon"], ];

const imageArray = new Array(); 
    imageArray[0] = `<img class='center-block' src='../assets/images/independence.jpg'>`;
    imageArray[1] = `<img class='center-block' src='../assets/images/air.jpg'>`; 
    imageArray[2] = `<img class='center-block' src='../assets/images/scream.jpg'>`; 
    imageArray[3] = `<img class='center-block' src='../assets/images/gump.jpg'>`;  
    imageArray[4] = `<img class='center-block' src='../assets/images/usual.jpg'>`; 
    imageArray[5] = `<img class='center-block' src='../assets/images/pretty.jpg'>`; 
    imageArray[6] = `<img class='center-block' src='../assets/images/space.jpg'>`; 
    imageArray[7] = `<img class='center-block' src='../assets/images/guard.jpg'>`; 

const correctAnswers = 
    [ "C. Captain Steven Hiller", 
    "C. Con Air", 
    "B. Seven", 
    "B. 1994", 
    "B. Roger", 
    "C. Roy Orbison", 
    "C. Space Jam", 
    "A. The Bodyguard"];