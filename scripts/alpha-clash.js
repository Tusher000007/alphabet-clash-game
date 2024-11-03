// function play(){
//     const homeSection=document.getElementById("home-screen");
//     homeSection.classList.add("hidden");

//     const playgroundSection=document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
// }
function handleKeyboardButtonpress(event){
    const playerpressed=event.key;

    // Get the expected to press
    const currentAlphabetElement=document.getElementById("current-alphabet");
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    

    // Checked matched or not
    if(playerpressed===expectedAlphabet){
        console.log("Right");
        // Update score
        const currentScoreElement=document.getElementById("current-score");
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        const newScore=currentScore+1;
        currentScoreElement.innerText=newScore;

        // Start a new round
        removeBackgroundColorbyId(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement=document.getElementById("current-life");
        const currentLifeText=currentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        const newLife=currentLife-1;
        currentLifeElement.innerText=newLife;
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
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}