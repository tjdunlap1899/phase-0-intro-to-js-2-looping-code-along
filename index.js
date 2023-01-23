// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
    // console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
    // for (let i = 0; i < gifts.length; i++) {
        // console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // }

    // return gifts;
// }

// wrapGifts(gifts);

const namesList = ["Guadalupe", "Ollie", "Aki"];

function writeCards(namesList) {
    let thankYouCards = [];
    for (let i = 0; i < namesList.length; i++) {
        thankYouCards.push(`Thank you, ${namesList[i]}, for the wonderful surprise gift!`);
    }
    return thankYouCards
}

function countDown(startingNumber) {;
while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1;
}
console.log(startingNumber);
}