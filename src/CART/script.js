const btn1 = document.querySelector(".product1btn");
const btn2 = document.querySelector(".product2btn");
const btn3 = document.querySelector(".product3btn");

const addProductList = document.querySelector(".productlist");
const addToCartPrice = document.querySelector(".product_added");

const p1 = 4999;
const p2 = 1999;
const p3 = 2999;

let totalPrice = 0;
let productItems = [];

btn1.addEventListener("click", () => {
  totalPrice += p1;
  displayProduct(1);
});
btn2.addEventListener("click", () => {
  totalPrice += p2;
  displayProduct(2);
});
btn3.addEventListener("click", () => {
  totalPrice += p3;
  displayProduct(3);
});

// Single function to handle all product adds
function displayProduct(pId) {
  let productName = "";
  if (pId === 1) productName = "Product 1 - ₹4999";
  else if (pId === 2) productName = "Product 2 - ₹1999";
  else if (pId === 3) productName = "Product 3 - ₹2999";

  productItems.push(productName);

  // Update product list in UI
  addProductList.innerHTML = ""; // clear previous
  productItems.forEach((item, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${item}`;
    addProductList.appendChild(p);
  });

  // Update total price
  addToCartPrice.textContent = totalPrice;
}
