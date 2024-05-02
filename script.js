const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

let attempts = 0;
let correctPassword = generateRandomPassword();

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  attempts++;

  if (passwordInput.value === correctPassword) {
    successMessage.style.display = "block";
    passwordInput.value = "";
    correctPassword = generateRandomPassword();
    attempts = 0;
    setTimeout(() => {
      window.location.href = "success.html";
    }, 2000);
  } else if (attempts < 3) {
    errorMessage.style.display = "block";
    passwordInput.value = "";
  } else {
    errorMessage.style.display = "block";
    passwordInput.value = "";
    correctPassword = generateRandomPassword();
    attempts = 0;
  }
});

function generateRandomPassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < 4; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}
