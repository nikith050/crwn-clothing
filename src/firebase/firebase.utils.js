import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBiq4h8n9OExqT6jpDo_TTUcv74dEHEa30",
    authDomain: "crwn-db-1178e.firebaseapp.com",
    projectId: "crwn-db-1178e",
    storageBucket: "crwn-db-1178e.appspot.com",
    messagingSenderId: "1009458056048",
    appId: "1:1009458056048:web:7e768c468b0da1e4591db5",
    measurementId: "G-TY8KZR6Y7W"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;