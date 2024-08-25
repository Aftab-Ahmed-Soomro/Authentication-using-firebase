import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { updateDoc, getDoc, doc, deleteDoc,getFirestore,collection, addDoc,getDocs  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { uploadBytesResumable, uploadBytes, ref,getStorage,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-QaL82fttvGj7EnwQvRlSOF9Vg1SQpM4",
  authDomain: "authenticate-12815.firebaseapp.com",
  projectId: "authenticate-12815",
  storageBucket: "authenticate-12815.appspot.com",
  messagingSenderId: "160698163925",
  appId: "1:160698163925:web:9ffa1bd2e330d6b94bb85c",
  measurementId: "G-9SLTN8DJM2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); 

export {uploadBytesResumable, uploadBytes, ref,storage, updateDoc, getDoc, doc, deleteDoc,db,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail,collection, addDoc,getDocs,getDownloadURL }