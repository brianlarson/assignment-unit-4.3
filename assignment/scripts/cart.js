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
    console.log(`Basket is now full!`);
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
    return true;
}
console.log(`Calling empty() to remove all items from basket`, empty());
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

console.log(`Running addItem() six times with various items which is greater than maxItems (expect false)`, isFull());

addItem(`Tights`);
addItem(`Gloves`);
addItem(`Jacket`);
addItem(`Sunglasses`);
addItem(`Watch`);
addItem(`T-Shirt`); // this one triggers the full message and returns false since it's over the max amount of items

console.log(`Basket is now (expect list of 5 items instead of 6 since we're full!):`, basket);

console.log(`Calling isFull() on filled basket (expect true)`, isFull());

function removeItem(item) {
    let itemIndex = basket.indexOf(item);
    let result = null;
    if (itemIndex >= 0) {
        result = basket.splice(itemIndex, 1)[0];
        return result;
    }
    return result;
}

console.log(`Running removeItem('Sunglasses') and return removed item if found (expect Sunglasses)`, removeItem('Sunglasses'));

console.log(`Basket without Sunglasses is now:`, basket);


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
