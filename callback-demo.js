
// Callback Hell example add item in cart, verify stock, place order, payment
function addToCart(item, callback) {
    setTimeout(() => {
        console.log(`Added ${item} to cart`);
        callback(null, item);
    }, 1000);
}

function verifyStock(item, callback) {
    setTimeout(() => {
        console.log(`Verified stock for ${item}`);
        callback(null, item);
    }, 1000);
}

function placeOrder(item, callback) {
    setTimeout(() => {
        console.log(`Placed order for ${item}`);
        callback(null, item);
    }, 1000);
}

function processPayment(item, callback) {
    setTimeout(() => {
        console.log(`Processed payment for ${item}`);
        callback(null, item);
    }, 1000);
}

// Using callbacks (Callback Hell)
addToCart('Laptop', (err, item) => {
    if (err) throw err;
    verifyStock(item, (err, item) => {
        if (err) throw err;
        placeOrder(item, (err, item) => {
            if (err) throw err;
            processPayment(item, (err, item) => {
                if (err) throw err;
                console.log(`Order completed for ${item}`);
            });
        });
    });
});
 
// Using Promises for better readability
function addToCartPromise(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Added ${item} to cart`);
            resolve(item);
        }, 1000);
    });
}

function verifyStockPromise(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Verified stock for ${item}`);
            resolve(item);
        }, 1000);
    });
}

function placeOrderPromise(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Placed order for ${item}`);
            resolve(item);
        }, 1000);
    });
}

function processPaymentPromise(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processed payment for ${item}`);
            resolve(item);
        }, 1000);
    });
}

// Chaining Promises
addToCartPromise('Laptop')
    .then(verifyStockPromise)
    .then(placeOrderPromise)
    .then(processPaymentPromise)
    .then((item) => {
        console.log(`Order completed for ${item}`);
    })
    .catch((err) => {
        console.error(err);
    });