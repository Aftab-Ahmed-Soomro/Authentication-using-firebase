import {auth,signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail} from '../firebase.js'

let formField = document.querySelectorAll('#form2 input')

const [email, password] = formField;

let loginBtn = document.getElementById('loginBtn');
let forgotPass = document.getElementById('forgot-password');

const login = () => {
    event.preventDefault();
    loginBtn.innerText = 'Loading...'
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    loginBtn.innerText = 'Login'
    const user = userCredential.user;
    Toastify({
        text: 'Login Successfully',  
        duration: 3000   
        }).showToast();
  })
  .catch((error) => {
    loginBtn.innerText = 'Login'
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: errorMessage,  
        duration: 3000   
        }).showToast();
  });
}

email.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    login();
  }
});

password.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    login();
  }
});


loginBtn.addEventListener('click',login);

const forgotPassword = () => {
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    Toastify({
        text: 'Check Your Email, Password has been sent',  
        duration: 3000   
        }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: errorMessage,  
        duration: 3000   
        }).showToast();
  });
}

forgotPass.addEventListener('click',forgotPassword)

onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = '../Dashboard/dashboard.html' 
    }
});