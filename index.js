let firstcard=10
let secondcard=4
let sum=firstcard+secondcard
let haveblackjack=false
let isalive=true
let message=" "
let messegeEl=document.getElementsById("messege-El")
let sumEl=document.getElementById("sum-El")
function startGame(){
    sumEl.textContent = "Sum: " + sum
    if(sum>21){
        console.log("Sorry,You lost the game")
        isalive=false
    }
    else if(sum<20){
        console.log("Pls Draw a new card")
    }
    else if(sum===21){
        console.log("You have won a blackjack!")
        haveblackjack=true
    }
    messageEl.textContent = message

}

