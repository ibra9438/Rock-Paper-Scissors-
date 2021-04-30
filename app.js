// cashing the dom
var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-borad");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const CHOICES = ['r', 'p', 's'];
    const RANDOMNUMBER = Math.floor(Math.random() * 3);
    return CHOICES[RANDOMNUMBER]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const USERCHOICE_DIV = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!.`;
    USERCHOICE_DIV.classList.add('green-glow');
    setTimeout(() => USERCHOICE_DIV.classList.remove('green-glow'), 300);
}


function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const USERCHOICE_DIV = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}. You Lost!.`;
    USERCHOICE_DIV.classList.add("red-glow");
    setTimeout(() => USERCHOICE_DIV.classList.remove('red-glow'), 300);
}

function draw(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const USERCHOICE_DIV = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Draw !.`;
    USERCHOICE_DIV.classList.add("grey-glow");
    setTimeout(() => USERCHOICE_DIV.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "rs ":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();