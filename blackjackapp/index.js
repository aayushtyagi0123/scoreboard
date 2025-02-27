/*let firstcard=6;
let secondcard=9;
let sum=firstcard+secondcard;
console.log(sum);

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  //false
console.log(3 < 0)    //false
console.log(3 >= 3)   // true
console.log(11 <= 11) //true
console.log(3 <= 2)   //false
*/

let player={
    name:"Aayush",
    chip:125
}
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards=[];
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+":$"+player.chip;
console.log(messageEl)


function getRandomCard() {
   

    let randomNumber=Math.floor(Math.random()*13)+1
if(randomNumber===1)
{
    return 11;
}
else if(randomNumber>10)
{
    return 10;
}
else{
    return randomNumber;
}
}
function startGame()
{

    let isAlive = true
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    let cards=[firstCard,secondCard];
    let sum=firstCard+secondCard;
    renderGame();

}
function renderGame()
{
    sumEl.textContent="Sum: "+sum;
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=cards[i]+" ";
    }
if (sum <= 20) {
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false
}




messageEl.textContent=message;

}



function newGame()
{

    if(isAlive===true && hasBlackJack===false)
    {
    let card=getRandomCard();
    cards.push(card);
    sum+=card;
    renderGame();
    }
}