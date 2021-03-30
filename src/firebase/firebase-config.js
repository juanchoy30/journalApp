import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqPDxb8wNWA7elXkM46OvOtYDi4Zn1qeY",
    authDomain: "react-app-cursos-5fe98.firebaseapp.com",
    projectId: "react-app-cursos-5fe98",
    storageBucket: "react-app-cursos-5fe98.appspot.com",
    messagingSenderId: "488139432821",
    appId: "1:488139432821:web:87e3261a8d1fe1c481e93c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);   

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}