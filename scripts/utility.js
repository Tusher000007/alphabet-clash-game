function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("hidden");
}
function removeBackgroundColorbyId(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("bg-orange-500");


}
function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;

}
function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;

}

function getRandomAlphabet(){
    // Create an alphabet array
    const alphabetString="abcdefghijklmnopqrstuvwxyz";
    const alphabets=alphabetString.split('');
    

    // get a random number from 0 to 25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    console.log(index);

    // get Alphabet with index number
    const alphabet=alphabets[index];
    console.log(index, alphabet);
    return alphabet;

}
function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("bg-orange-500");

}