import {auth,signOut,onAuthStateChanged} from '../firebase.js'

let logOutBtn = document.getElementById('logOutBtn');

const logOut = () => {
    signOut(auth).then(() => {
        Toastify({
            text: 'Log Out Successfully',  
            duration: 3000   
            }).showToast();
      }).catch((error) => {
        Toastify({
            text: error,  
            duration: 3000   
            }).showToast();
      });
}

logOutBtn.addEventListener('click',logOut)

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../Login/login.html'
    }
});  