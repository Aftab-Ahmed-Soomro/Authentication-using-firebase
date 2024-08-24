import {auth,createUserWithEmailAndPassword,onAuthStateChanged } from '../firebase.js'

let formfield = document.querySelectorAll('#form input');

const [userEmail, userPassword] = formfield;

let signUpBtn = document.getElementById('signUpBtn');   

const signup = () => {
    event.preventDefault();
    signUpBtn.innerText = 'Loading...' 
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    signUpBtn.innerText = 'Sign Up'
    const user = userCredential.user;
    Toastify({
        text: 'SignUp Successfully',  
        duration: 3000   
        }).showToast();
  })
  .catch((error) => {
    signUpBtn.innerText = 'Sign Up'
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: errorMessage,  
        duration: 3000   
        }).showToast();
  });
}

userEmail.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    signup();
  }
});

userPassword.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    signup();
  }
});

signUpBtn.addEventListener('click',signup);

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../Dashboard/dashboard.html'
    }
});  