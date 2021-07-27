let result = document.querySelector("#result");
let less = document.querySelector("#less");
let lessFive = document.querySelector("#lessFive");
let lessTen = document.querySelector("#lessTen");
let more = document.querySelector("#more");
let moreFive = document.querySelector("#moreFive");
let moreTen = document.querySelector("#moreTen");
let reset = document.querySelector("#reset");

let count = 0;

let piu = () => {
  count++;
  result.style.color = "red";
  result.innerHTML = count;
};

let piuFive = () => {
  count += 5;
  result.style.color = "red";
  result.innerHTML = count;
};

let piuTen = () => {
  count += 10;
  result.style.color = "red";
  result.innerHTML = count;
};

let meno = () => {
  count--;
  result.style.color = "blue";
  result.innerHTML = count;
};

let menoFive = () => {
  count -= 5;
  result.style.color = "blue";
  result.innerHTML = count;
};

let menoTen = () => {
  count -= 10;
  result.style.color = "blue";
  result.innerHTML = count;
};

let resetNum = () => {
  count = 0;

  result.style.color = "black";
  result.innerHTML = count;
};

more.onclick = () => {
  piu();
};

moreFive.onclick = () => {
  piuFive();
};

moreTen.onclick = () => {
  piuTen();
};

less.onclick = () => {
  meno();
};

lessFive.onclick = () => {
  menoFive();
};

lessTen.onclick = () => {
  menoTen();
};

reset.onclick = () => {
  resetNum();
};
