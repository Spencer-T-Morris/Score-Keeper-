//sets all of player one to global vars allowing us to munipulate the DOM with them later
var button1 = document.querySelector('#ctr1');
var p1s =document.querySelector("#score1");
var score1 = 0;

//sets all of player two to  global vars allowing us to munipulate the DOM with them later
var button2 = document.querySelector('#ctr2');
var p2s =document.querySelector("#score2");
var score2 = 0;

//selects reset btn 
var reset = document.querySelector("#reset")
// initalizes winner to be used in winner out put later 
var winner = document.querySelector("#winner")

//event listener player 1 btn 
button1.addEventListener("click", function(){

    var limit = document.querySelector ("#limit").value;

    //keeps track of player 1's score (global variable)
    score1++;

    //pushes the value of score1 to HTML and shows user
    p1s.textContent = score1

    // checks to see if score 1's value is equal to limit or  if score1 is greater than score 2 and score 1 is above limit 
    if(score1 == limit || (score1 > score2 && score1 > limit)){
        //adds color green to score that wins
        p1s.classList.add("green")
        //disables btns so that user can not continue add points after limit score has been reached  
        button1.setAttribute("disabled", "true")
        button2.setAttribute("disabled", "true")
        // ends game and prints winner to the last <h3> tag of the html 
        printWinner()
     }

})
//event listener player 2 btn 
button2.addEventListener("click", function(){

    var limit = document.querySelector ("#limit").value;

    //keeps track of player 1's score (global variable)
    score2++;

    //pushes the value of score1 to HTML and shows user
    p2s.textContent = score2
     
    // checks to see if score 2's value is equal to limit or  if score2 is greater than score 1 and score 2 is above limit
    if(score2 == limit || (score2>score1 && score2>limit)){
        //adds color green to score that wins
        p2s.classList.add("green") 
        //disables btns so that user can not continue add points after limit score has been reached
        button1.setAttribute("disabled", "true")
        button2.setAttribute("disabled", "true")
        // ends game and prints winner to the last <h3> tag of the html 
        printWinner()
     }

})
//event listener reset btn
reset.addEventListener("click", function(){
    //removes the disabled apillied at the end of match on player1 and player2 btn 
    button1.removeAttribute("disabled")
    button2.removeAttribute("disabled")
    //removes the green class adeed to the winners number.
    p1s.classList.remove("green")
    p2s.classList.remove("green")
    //resets score to zero
    score1 = 0
    score2 = 0 
    //visualy resets score to zero on the DOM 
    p1s.textContent = score1
    p2s.textContent = score2
    //resets limit to default of five 
    document.querySelector("#limit").value = 5
    //scrubs winner
    winner.textContent=""
})
//creats printWinner function called earlier win someone wins
//decides winner then pushes it to the DOM 
function printWinner(){
    if(score1>score2){
        winner.textContent ="Player 1"
    }
    else
    {   winner.textContent = "Player 2"

    }
}