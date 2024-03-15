'use strict';

const display = document.getElementById("display");
let number = 0;
let numberTmp = null;
let operator = "None";
display.innerText = String(number);

const operator_list = ["plus", "minus", "multiplication", "division"];

const onClickNumber = (x) => {
    number = number * 10 + x;
    display.innerText = String(number);
};

const onClickClear = () => {
    number = 0;
    numberTmp = null;
    operator = "None";
    display.innerText = String(number);
};

const onClickOperator = (x) => {
    if (numberTmp == null) {
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
    number = 0;
    display.innerText = String(numberTmp);
    if (x == "None") {
        numberTmp = null
    };
    operator = x;
};

for (let i = 0; i < 10; i++) {
    let buttonNumber = document.getElementById("button-" + String(i));
    buttonNumber.addEventListener("click", onClickNumber.bind(null, i));
};

document.getElementById("button-clear").addEventListener("click", onClickClear);
document.getElementById("button-equal").addEventListener("click", onClickOperator.bind(null, "None"))

for (let i = 0; i < 4; i++) {
    let buttonOperation = document.getElementById("button-" + operator_list[i]);
    buttonOperation.addEventListener("click", onClickOperator.bind(null, operator_list[i]));
};