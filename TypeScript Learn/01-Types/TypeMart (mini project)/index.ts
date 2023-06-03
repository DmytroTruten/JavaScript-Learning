import products from "./products";

const productName: string = "tote bag";
let shipping: number;
let taxPercent: number = 0;
let taxTotal: number;
let total: number;
const shippingAddress: string = "575 Broadway, New York City, New York"

const product = products.find(
  (element) => element.name === productName
);

if(product?.preOrder) {
  console.log("we'll send a message when it's on the way.");
}

if(Number(product?.price) >= 25) {
  shipping = 0;
  console.log("we provide free shipping for this product");
} else {
  shipping = 5
}

if(shippingAddress.match("New York")) {
  taxPercent = 0.1
}

taxTotal = Number(product?.price) * taxPercent
total = Number(product?.price) + taxTotal + shipping;

console.log(productName, shippingAddress, product?.price, taxTotal, shipping, total);
