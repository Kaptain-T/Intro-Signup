const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const exclamationIcon = document.querySelector(".fa-circle-exclamation")

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);
  const showIcons = function(){
    exclamationIcon.classList.toggle("show");
  }
  

  // Check first name
  const firstnamemessage = `
  <small class="error-message">First Name cannot be empty</small>
  `;
  if (fName === '') {
    firstName.classList.add('error');
    showIcons();
    if (firstName.nextElementSibling == null){
      firstName.insertAdjacentHTML("afterend", firstnamemessage);
    }
  } else {
    firstName.classList.remove('error');
  }

  // Check last name
  const lastnamemessage = `
  <small class="error-message">Last Name cannot be empty</small>
  `;
  if (lName === '') {
    lastName.classList.add('error');
    showIcons();
    if (lastName.nextElementSibling == null){
      lastName.insertAdjacentHTML("afterend", lastnamemessage);
    }
  } else {
    lastName.classList.remove('error');
  }

  // Check email
  const emailmessage = `
  <small class="error-message">Looks like this is not an email</small>
  `;
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    showIcons();
    if (email.nextElementSibling == null){
    email.insertAdjacentHTML("afterend", emailmessage);
    email.placeholder = "email@example/com";
    }
  } else {
    email.classList.remove('error');
  }

  // Check password
  const passwordmessage = `
  <small class="error-message">Password cannot be empty</small>
  `;
  if (passwordVal === '') {
    password.classList.add('error');
    showIcons();
    if (password.nextElementSibling == null){
      password.insertAdjacentHTML("afterend", passwordmessage);
    }
  } else {
    password.classList.remove('error');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
