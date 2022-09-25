let input = document.querySelector("input");
let clear_btn = document.getElementById("clear");

const showNumber = (sym) => {
  input.value = input.value + sym;
};

const calculate = () => {
  if (input.value !== "") {
    input.value = eval(input.value);
  }
};

const clear = () => {
  input.value = "";
};

clear_btn.addEventListener("click", clear);


const amallar = (symb) => {
  if (input.value!=="") {
    input.value = input.value+symb
  }

  }

let bs = document.getElementById("bs")

const uchirish = () => {
input.value = input.value.slice(0, input.value.length-1)
  }

bs.addEventListener("click", uchirish);

// let str = '123//'

// console.log(str.charAt(str.length-1));

// if (str.charAt(str.length-1) == '/') {
//   str.length = ""

// }

// console.log(str[1]);