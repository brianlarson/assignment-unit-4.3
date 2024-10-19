console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (item && !isFull()) {
        basket.push(item);
        return true;
    }
    console.log(`Basket is full!`);
    return false;
}
console.log(`Basket is (expect empty array):`, basket);
console.log(`Calling addItem('Running Shoes') (expect true):`, addItem('Running Shoes'));
console.log(`Basket is now:`, basket);

function listItems() {
    for (const item of basket) {
        console.log(item);
    }
}
console.log(`Calling listItems() outside of console.log() gives us:`);
listItems();

console.log(`Adding socks to basket:`)
addItem(`Socks`);
console.log(`Basket is now:`, basket);

function empty() {
    for (let i = 0; i <= basket.length; i++) {
        basket.pop();
    }
}
console.log(`Calling empty() outside of console.log():`);
empty();
console.log(`Basket is now (expect empty array):`, basket);

console.log('***** Stretch Goals *****');

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    return true;
}
console.log(`Calling isFull() on empty basket (expect false)`, isFull());

console.log(`Running addItem() six times with various items`, isFull());

addItem(`Tights`);
addItem(`Gloves`);
addItem(`Jacket`);
addItem(`Sunglasses`);
addItem(`Watch`);
addItem(`T-Shirt`);

console.log(`Basket is now (expect list of 5 items instead of 6 since we're full):`, basket);

console.log(`Calling isFull() on filled basket (expect true)`, isFull());

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
