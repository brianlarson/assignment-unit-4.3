console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    if (item) {
        basket.push(item);
        return true;
    }
    return false;
}
console.log(`Basket is (expect empty array):`, basket);
console.log(`Adding shoes (expect true):`, addItem('Running Shoes'));
console.log(`Basket is now:`, basket);

function listItems() {
    for (const item of basket) {
        console.log(item);
    }
}
console.log(`Running listItems() outside of console.log() gives us:`);
listItems();





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
