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

    if (winner == 'Nobody') {
        return ("It's a draw")
    }

    if (winner == 'Computer') {
        winnerInput = cInput;
        loserInput = pInput;
    } else if (winner == 'Player') {
        winnerInput = pInput;
        loserInput = cInput;
    }


    winMessage = `${winner} win. ${winnerInput} beats ${loserInput}`

    return winMessage;

}
//promt input and validate it
function valInput() {
    var rawInput = '';
    while (rawInput != 'Rock' && rawInput != 'Paper'&& rawInput != 'Scissor'){
        rawInput = prompt("Pick between Rock/Paper/Scissor", "Rock")
        rawInput = rawInput.toLowerCase();
        rawInput = rawInput.charAt(0).toUpperCase()+rawInput.slice(1);
        
        if (rawInput != 'Rock' && rawInput != 'Paper'&& rawInput != 'Scissor'){
            alert('Please insert correct input!')}
    }
    return(rawInput);
}


//include previous function, keep score and report winner until 5 win
function game() {
    var roundResult;
    var winner;
    var cWin = 0;
    var pWin = 0;
    var round = 0;
    var pInput
    while (pWin < 5 && cWin < 5) {
        
        roundResult = (singleRound(valInput(),computerPlay()));
        if(roundResult.charAt(0) == 'C'){cWin++}
        else if (roundResult.charAt(0) == 'P'){pWin++}
        console.log('P:'+pWin + ' C:' + cWin + ' ' +roundResult);
    }

    if (cWin == 5){winner = 'Computer'};
    if (pWin == 5){winner = 'Player'};


    console.log ('Final score is '+ pWin + ':' + cWin + ' Victory belong to '+ winner);
    
}

game();

