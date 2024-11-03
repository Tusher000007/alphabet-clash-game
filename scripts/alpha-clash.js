
function handleKeyboardButtonpress(event){
    const playerpressed=event.key;
    
    // Stop the game by pressing "Esc"
    if(playerpressed==="Escaped"){
        gameOver();
    }


    // Get the expected to press
    const currentAlphabetElement=document.getElementById("current-alphabet");
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    

    // Checked matched or not
    if(playerpressed===expectedAlphabet){
        const currentScore=getTextElementValueById("current-score");
        const updatedScore=currentScore+1;
        setTextElementValueById("current-score",updatedScore);
        

        // Start a new round
        removeBackgroundColorbyId(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife=getTextElementValueById("current-life");
        const updatedLife=currentLife-1;
        setTextElementValueById("current-life",updatedLife);

        if(updatedLife===0){
            gameOver();
        }
    }

    
}
document.addEventListener("keyup",handleKeyboardButtonpress);
function continueGame(){
    const alphabet=getRandomAlphabet();
    // Show on Screen
    const currentAlphabetElement=document.getElementById("current-alphabet");
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColorById(alphabet);

}
function play(){
    // Hide everything and show only playground
    hideElementById("home-screen");
    hideElementById("final-score");
    showElementById("play-ground");
    // Reset Score and Life
    setTextElementValueById("current-life",5);
    setTextElementValueById("current-score",0);

    continueGame();
}
function gameOver(){

    hideElementById("play-ground");
    showElementById("final-score");
    const lastScore=getTextElementValueById("current-score");
    setTextElementValueById("last-score",lastScore);

    // Clear the last selected alphabet
    const currentAlphabet=getElementTextById("current-alphabet");
    removeBackgroundColorbyId(currentAlphabet);

}