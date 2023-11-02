//step 1, Declare variables
const errorTxt = "Valid email required.";
const signupForm = document.querySelector("#signup-form");
const successCard = document.querySelector(".success");
const errorMsg = document.getElementById("error-message");
let emailInput = document.getElementById("email");
let userEmail = document.getElementById("user-email");
const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.querySelector("#dismiss-btn");

//step 2, toggle cards
function toggleCard() {
    signupForm.classList.toggle("hidden");
    successCard.classList.toggle("hidden");
   
}

//step 3, validate email
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
}

//step 4, submit form
function submitForm(e) {
    e.preventDefault();

  if (validateEmail(emailInput.value)) {
    document.getElementById("email").classList.remove("errorStyle");   
    userEmail.textContent = emailInput.value;
    toggleCard();
    emailInput.value = "";
    errorMsg.textContent = "";
  }
  else {
    errorMsg.textContent = errorTxt;
    document.getElementById("email").classList.add("errorStyle");
  }
}

//step 5, dismiss 
function dismiss() {
    toggleCard();
}

//step 6, add event listener to toggle cards
submitBtn.addEventListener("click", submitForm);
dismissBtn.addEventListener("click", dismiss);
