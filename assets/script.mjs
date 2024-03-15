'use strict';

const display = document.getElementById("display");
let number = null;
let numberTmp = null;
let operator = "None"
let point = null;
display.innerText = String(0);

const operator_list = ["plus", "minus", "multiplication", "division", "equal"];

const onClickNumber = (x) => {
    if (operator == operator_list[4]) {
        numberTmp = null;
        operator = "None"
    };
    if (number == null) {
        number = 0
    };
    if (point == null) {
        number = number * 10 + x;
    } else {
        number = number + x * (10 ** point);
        point -= 1;
    };
    display.innerText = String(number);
};

const onClickClear = () => {
    number = null;
    numberTmp = null;
    operator = "None";
    point = null;
    display.innerText = String(0);
};

const onClickOperator = (x) => {
    if (number == null) {
        ;
    } else if (numberTmp == null) {
        numberTmp = number
    } else {
        if (operator == operator_list[0]) {
            numberTmp += number
        } else if (operator == operator_list[1]) {
            numberTmp -= number
        } else if (operator == operator_list[2]) {
            numberTmp *= number
        } else if (operator == operator_list[3]) {
            numberTmp /= number
        };
    };
    display.innerText = String(numberTmp);
    number = null;
    point = null;
    operator = x;
};

const onClickPoint = () => {
    if (point == null) {
        point = -1
    };
    display.innerText += "."
};

for (let i = 0; i < 10; i++) {
    let buttonNumber = document.getElementById("button-" + String(i));
    buttonNumber.addEventListener("click", onClickNumber.bind(null, i));
};

for (let i = 0; i < 5; i++) {
    let buttonOperation = document.getElementById("button-" + operator_list[i]);
    buttonOperation.addEventListener("click", onClickOperator.bind(null, operator_list[i]));
};

document.getElementById("button-point").addEventListener("click", onClickPoint);
document.getElementById("button-clear").addEventListener("click", onClickClear);