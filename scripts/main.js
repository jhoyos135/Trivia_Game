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

    static timeout() {};

    static win() {};

    static loss() {};

    static questions() {};

    static final() {};

}

class Helper {

    static reset() {};

    static wait() {};

    static timer() {};

}

document.addEventListener('DOMContentLoaded', () => {

    let openingPage = function() {};

    openingPage();

    //TODO: start click event

    //TODO: answer click event

    //todo: reset click event

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
    imageArray[0] = "<img class='center-block' src='../assets/images/independence.jpg'>";
    imageArray[1] = "<img class='center-block' src='../assets/images/air.jpg'>"; 
    imageArray[2] = "<img class='center-block' src='../assets/images/scream.jpg'>"; 
    imageArray[3] = "<img class='center-block' src='../assets/images/gump.jpg'>";  
    imageArray[4] = "<img class='center-block' src='../assets/images/usual.jpg'>"; 
    imageArray[5] = "<img class='center-block' src='../assets/images/pretty.jpg'>"; 
    imageArray[6] = "<img class='center-block' src='../assets/images/space.jpg'>"; 
    imageArray[7] = "<img class='center-block' src='../assets/images/guard.jpg'>"; 

const correctAnswers = 
    [ "C. Captain Steven Hiller", 
    "C. Con Air", 
    "B. Seven", 
    "B. 1994", 
    "B. Roger", 
    "C. Roy Orbison", 
    "C. Space Jam", 
    "A. The Bodyguard"];