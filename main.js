var cWin = 0;
var pWin = 0;
var draw = 0;
var round = 0;

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay() {
    val = Math.random();
    if (val < 0.33) {
        return('Rock');
    } else if(val > 0.33 && val < 0.66) {
        return('Paper');
    } else {
        return('Scissor')
    }  
}

//single round function that receive two parameter: from player and ai
//return string that declares the winner
function singleRound(pInput, cInput) {
    let winner;
    let winnerInput;
    let loserInput;
    let winMessage;

    if (pInput == cInput) {
        winner = 'Nobody';
    } else if (pInput == 'Rock' && cInput == 'Paper') {
        winner = 'Computer'
    } else if (pInput == 'Rock' && cInput == 'Scissor') {
        winner = 'Player'
    } else if (pInput == 'Paper' && cInput == 'Rock') {
        winner = 'Player'
    } else if (pInput == 'Paper' && cInput == 'Scissor') {
        winner = 'Computer'
    } else if (pInput == 'Scissor' && cInput == 'Rock') {
        winner = 'Computer'
    } else if (pInput == 'Scissor' && cInput == 'Paper') {
        winner = 'Player'
    }

    let spInput = pInput.toLowerCase();
    let scInput = cInput.toLowerCase();

    document.getElementById("player-picked").src = "/img/"+spInput+".svg";
    document.getElementById("computer-picked").src = "/img/"+scInput+".svg";

    if (winner == 'Nobody') {
        document.getElementById("message").innerHTML = `It's a draw`;
        winMessage="It's a draw";
        return (winMessage);
    }

    if (winner == 'Computer') {
        winnerInput = cInput;
        loserInput = pInput;
    } else if (winner == 'Player') {
        winnerInput = pInput;
        loserInput = cInput;
    }



    

    winMessage = `${winner} win. ${winnerInput} beats ${loserInput}`
    document.getElementById("message").innerHTML = `${winner} win`;
    console.log(winMessage);
    return winMessage;

}

//include previous function, keep score and report winner until 5 win
function game(e) {
    var roundResult;
    var winner;

    //update interface based on round result     
    roundResult = (singleRound(this.id,computerPlay()));
    if(roundResult.charAt(0) == 'C'){
        cWin++;
        round++;
        document.getElementById("cScore").innerText =cWin;
        document.getElementById("roundNum").innerText =round;
    }
    else if (roundResult.charAt(0) == 'P'){
        pWin++;
        round++;
        document.getElementById("pScore").innerText = pWin;
        document.getElementById("roundNum").innerText =round;
    }
    else {
        draw++;
        round++;
        document.getElementById("dScore").innerText = draw;
        document.getElementById("roundNum").innerText =round;
    }
    console.log('P:'+pWin + ' C:' + cWin + ' ' +roundResult);

    //game result
    if (cWin == 5){
        document.getElementById("message").innerHTML = `Sorry, you lost. [Auto reset in 3 second]`;
    };
    if (pWin == 5){
        document.getElementById("message").innerHTML = `Congratulations, you win. [Auto reset in 3 second]`;
    };

    if (cWin == 5 || pWin == 5) {
        setTimeout(() => { reset(); }, 3000);


    }


        
}

function reset() {
    cWin = 0;
    pWin = 0;
    draw = 0;
    round = 0;
    document.getElementById("cScore").innerText = cWin;
    document.getElementById("pScore").innerText = pWin;
    document.getElementById("dScore").innerText = draw;
    document.getElementById("roundNum").innerText =round;
    document.getElementById("player-picked").src = "/img/blank.svg";
    document.getElementById("computer-picked").src = "/img/blank.svg";
    document.getElementById("message").innerHTML = `Pick your hands`;
    console.clear()
}


document.getElementById("Rock").addEventListener("click", game);
document.getElementById("Paper").addEventListener("click", game);
document.getElementById("Scissor").addEventListener("click", game);

