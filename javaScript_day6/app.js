const products = [
    {id: 101, title: "Wireless Headphones", price: 150, inStock: false},
    {id: 102, title: "Gaming Mouse", price: 80, inStock: false},
    {id: 103, title: "Mechanical Keyboard", price: 120, inStock: true},
    {id: 104, title: "USB-C Cable", price: 15, inStock: false}
];

const discountedProducts = products.map((product)=> ({
...product,
price: product.price * 0.9,
inStock: true
}));

console.log("Discounted: ", discountedProducts);
console.log("Original Price: ", products);
// This forces Node to print out the complete objects as readable text
console.log("Discounted:", JSON.stringify(discountedProducts, null));

const cheapProducts = products.filter(product => product.price < 100);
console.log("Cheap products are: ", JSON.stringify(cheapProducts, null));

const totalCartPrice = products.reduce((acc, product, value) => {
return acc + product.price;
}, 0)

console.log("Total price is: " ,totalCartPrice);