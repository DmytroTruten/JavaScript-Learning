"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const productName = "tote bag";
let shipping;
let taxPercent = 0;
let taxTotal;
let total;
const shippingAddress = "575 Broadway, New York City, New York";
const product = products_1.default.find((element) => element.name === productName);
if (product === null || product === void 0 ? void 0 : product.preOrder) {
    console.log("we'll send a message when it's on the way.");
}
if (Number(product === null || product === void 0 ? void 0 : product.price) >= 25) {
    shipping = 0;
    console.log("we provide free shipping for this product");
}
else {
    shipping = 5;
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
taxTotal = Number(product === null || product === void 0 ? void 0 : product.price) * taxPercent;
total = Number(product === null || product === void 0 ? void 0 : product.price) + taxTotal + shipping;
console.log(productName, shippingAddress, product === null || product === void 0 ? void 0 : product.price, taxTotal, shipping, total);
