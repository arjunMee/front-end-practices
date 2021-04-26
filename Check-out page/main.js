'use strict'

const increamentProduct = document.querySelector(".add-prod_1");
const decreamentProduct = document.querySelector(".remove-prod_1");
const displayProductNumber = document.querySelector(".display_1");

const increamentProduct_2 = document.querySelector(".add-prod_2");
const decreamentProduct_2 = document.querySelector(".remove-prod_2");
const displayProductNumber_2 = document.querySelector(".display_2");


let count = 1;

increamentProduct.addEventListener('click', () => {
    count += 1;
    displayProductNumber.innerText = count;
});

decreamentProduct.addEventListener('click', () => {
    count -= 1;
    count = Math.abs(count);
    displayProductNumber.innerText = count;
});

increamentProduct_2.addEventListener('click', () => {
    count += 1;
    displayProductNumber_2.innerText = count;
});

decreamentProduct_2.addEventListener('click', () => {
    count -= 1;
    count = Math.abs(count);
    displayProductNumber_2.innerText = count;
});

