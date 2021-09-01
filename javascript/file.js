let body = document.querySelector(".body");
let result = document.querySelector("#result");
let less = document.querySelector("#less");
let more = document.querySelector("#more");
let containerReset = document.querySelector(".containerReset");

let count = 0;

body.onload = function () {
  ready();
};

var btn1 = document.createElement("button");
btn1.type = "button";
btn1.id = "moreOne";
btn1.innerText = "+1";

var btn2 = document.createElement("button");
btn2.type = "button";
btn2.id = "moreFive";
btn2.innerText = "+5";

var btn3 = document.createElement("button");
btn3.type = "button";
btn3.id = "moreTen";
btn3.innerText = "+10";

var btn4 = document.createElement("button");
btn4.type = "button";
btn4.id = "lessOne";
btn4.innerText = "-1";

var btn5 = document.createElement("button");
btn5.type = "button";
btn5.id = "lessFive";
btn5.innerText = "-5";

var btn6 = document.createElement("button");
btn6.type = "button";
btn6.id = "lessTen";
btn6.innerText = "-10";

var btn7 = document.createElement("button");
btn7.type = "button";
btn7.id = "reset";
btn7.innerText = "Reset";

function ready() {
  more.appendChild(btn1);
  more.appendChild(btn2);
  more.appendChild(btn3);
  less.appendChild(btn6);
  less.appendChild(btn5);
  less.appendChild(btn4);
  containerReset.appendChild(btn7);
}

let plus = (numero) => {
  count += numero;
  result.style.color = "red";
  result.innerHTML = count;
};

let reduce = (numero) => {
  count -= numero;
  result.style.color = "blue";
  result.innerHTML = count;
};

let resetNum = (numero) => {
  count = numero;
  result.style.color = "black";
  result.innerHTML = count;
};

btn1.addEventListener("click", () => {
  plus(1);
});

btn2.addEventListener("click", () => {
  plus(5);
});

btn3.addEventListener("click", () => {
  plus(10);
});

btn4.addEventListener("click", () => {
  reduce(1);
});

btn5.addEventListener("click", () => {
  reduce(5);
});

btn6.addEventListener("click", () => {
  reduce(10);
});

btn7.addEventListener("click", () => {
  resetNum(0);
});
