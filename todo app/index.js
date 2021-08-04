let input = document.querySelector(".card input");
let add = document.querySelector(".card button");

let localarr;
let localstorage = localStorage.getItem("todoapp");

add.onclick = () => {
  let inputVal = input.value;

  if (inputVal == "") {
    alert("Pease add your tesk frist");
  } else {
    if (localstorage == null) {
      localarr = [];
    } else {
      localarr = JSON.parse(localstorage);
    }
  }
  localarr.push(inputVal);
  localstorage.setItem("");

  input.value = "";
};
