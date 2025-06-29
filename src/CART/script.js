const btn1 = document.querySelector(".product1btn");
const btn2 = document.querySelector(".product2btn");
const btn3 = document.querySelector(".product3btn");
// const calculate = document.querySelector(".calculate");
const addproduct=document.querySelector(".productlist")
const addtocart=document.querySelector(".product_added")
const p1 = 4999;
const p2 = 1999;
const p3 = 2999;

let totalPrice = 0;

btn1.addEventListener("click", (e) => {
  totalPrice += p1;
 displayProduct(1);
});
btn2.addEventListener("click", (e) => {
  totalPrice += p2;
  displayProduct(2);
});
btn3.addEventListener("click", (e) => {
  totalPrice += p3;
  displayProduct1(3);
});
setInterval(()=>{
displayProduct(pId){

}
},100)

