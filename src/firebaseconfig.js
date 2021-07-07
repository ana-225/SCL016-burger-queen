// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-ZvAG3TqsrkvxRGKXwek69WyM8Xw77w",
  authDomain: "burger-queen-fee8c.firebaseapp.com",
  projectId: "burger-queen-fee8c",
  storageBucket: "burger-queen-fee8c.appspot.com",
  messagingSenderId: "982468227073",
  appId: "1:982468227073:web:61da45cf5a522b5aa4d000"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const store = fire.firestore()

export { auth, store };


