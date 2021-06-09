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

console.log(computerPlay());