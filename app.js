console.log("HELLO PAPA PLATOON!")

let random = Math.floor(Math.random()*(101- 1)) + 1;

function numberGame(){
    
    let userInput = document.getElementById('input-name')
    // userInput = userInput.value
    console.log(userInput)
    let userOutput = document.getElementById('output')
    
    if (userInput === random){
        userOutput.innerText = "Congrats, you won!";
    } else if (userInput < random){
        userOutput.innerText = 'Too low';
        userInput = ""
    } else {
        userOutput.innerText = 'Too high';
        userInput = ""
    }
}   

