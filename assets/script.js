'use strict';
var display = document.getElementById("display");
display.innerText = "0";
var number = null;
var numberTmp = null;
var operator = null;
var point = null;
var operator_list = ["plus", "minus", "multiplication", "division", "equal"];
var onClickNumber = function (x) {
    if (operator == operator_list[4]) {
        numberTmp = null;
        operator = "None";
    }
    ;
    if (number == null) {
        number = 0;
    }
    ;
    if (point == null) {
        number = number * 10 + x;
    }
    else {
        number = number + x * (Math.pow(10, point));
        point -= 1;
    }
    ;
    display.innerText = String(number);
};
var onClickClear = function () {
    number = null;
    numberTmp = null;
    operator = null;
    point = null;
    display.innerText = "0";
};
var onClickOperator = function (x) {
    if (number == null) {
        ;
    }
    else if (numberTmp == null) {
        numberTmp = number;
    }
    else {
        if (operator == operator_list[0]) {
            numberTmp += number;
        }
        else if (operator == operator_list[1]) {
            numberTmp -= number;
        }
        else if (operator == operator_list[2]) {
            numberTmp *= number;
        }
        else if (operator == operator_list[3]) {
            numberTmp /= number;
        }
        ;
    }
    ;
    display.innerText = String(numberTmp);
    number = null;
    point = null;
    operator = x;
};
var onClickPoint = function () {
    if (point == null) {
        point = -1;
    }
    ;
    display.innerText += ".";
};
for (var i = 0; i < 10; i++) {
    document.getElementById("button-" + String(i)).addEventListener("click", onClickNumber.bind(null, i));
}
;
for (var i = 0; i < 5; i++) {
    document.getElementById("button-" + operator_list[i]).addEventListener("click", onClickOperator.bind(null, operator_list[i]));
}
;
document.getElementById("button-point").addEventListener("click", onClickPoint);
document.getElementById("button-clear").addEventListener("click", onClickClear);
