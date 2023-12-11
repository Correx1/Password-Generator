const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*:=-";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", ()=> {
  let initPassword = empty;
  (upperCase.checked) ? initPassword += uCase : "";
  (lowerCase.checked) ? initPassword += lCase : "";
  (pNumber.checked) ? initPassword += number : "";
  (pSymbol.checked) ? initPassword += symbol : "";

  password.value = generatePassword(pLength.value, initPassword);
});

function generatePassword(l, initPassword) {
  let pass = "";
  for (let i = 0; i < l; i++)
    pass += initPassword.charAt(Math.floor(Math.random() * initPassword.length)
    );

  return pass;
}


/////copy

const copy = document.getElementById("copy")

copy.addEventListener('click', () => {
  if (password.value === '') {
    alert('Please generate a password')
  } else {
    password.select();
    document.execCommand("copy")
    alert("Password has been copied to Clipboard")

  }
})

