let products = [
    { name: 'Laptop', price: 1000, category: 'electronics' },
    { name: 'Phone', price: 500, category: 'electronics' },
    { name: 'Book', price: 20, category: 'education' },
    { name: 'Chair', price: 150, category: 'furniture' }
];

// Get expensive electronic products names
let expensiveElectronics = products
    .filter(product => product.category === 'electronics' && product.price > 300)
    .map(product => product.name);

console.log(expensiveElectronics); // ['Laptop', 'Phone']

// Calculate total price of all products
let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice); // 1670



products.forEach(product => {
    product.onSale = product.price > 100;
});

console.log(products);

let sortedProducts = products.splice().sort((a, b) => a.price - b.price);