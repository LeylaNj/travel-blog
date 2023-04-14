function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}
let themeButton = document.querySelector(".theme");
themeButton.addEventListener("click", changeTheme);

function traveling() {
  let name = prompt("What is your name?");
  if (name.length > 0) {
    alert(`Hi ${name} 👋🏻`);
  }
  let email = prompt("What is your email address?");
  if (email.length > 0) {
    alert(`${name}, We will be in touch by email😃`);
  } else {
    alert("Please type your email address😊");
  }
}
let travelButton = document.querySelector(".travel-button ");
travelButton.addEventListener("click", traveling);
