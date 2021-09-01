// Code your solutions in this file
/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
   

}

const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i=0; i< gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    
    }

    return  gifts;
}

wrapGifts(gifts);
*/

const name = ["Ada","Brendan","Ali"]

function writeCards(name, event){

    let messeges=[];
    //console.log (`thanks ${name[1]} to ${event}`);//
   for ( let i=0; i <  name.length; i++){
        messeges.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
        
    };
    return messeges;

};

function countDown(positiveNumber){

    while (positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }

}

