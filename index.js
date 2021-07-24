// Code your solution
//const cards = ["Angela","Lauren","Carlos"];
//function writeCards(cards) {
  // for (let i=0; i < cards.length; i++){
   //return (`Thank you, ${cards}, for the wonderful surprise gift!`);
   // }
//}
//const newArr = cards.map(writeCards);
//console.log(cards);
//console.log(newArr);

function writeCards(cards) {
     let messages = [];
    for (let i=0; i < cards.length; i++){
    messages.push(`Thank you, ${cards}, for the wonderful surprise gift!`);
    }
   return messages;
}
    
function countDown(int){
    while (int>= 0)
        {
        console.log(int);
        int--;
    }
    return int;
}
countDown(10);