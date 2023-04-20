// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDIQqWD9tiwIseAv63KnhgArGu3lZTmjM0",
    authDomain: "ig-clone-7b743.firebaseapp.com",
    projectId: "ig-clone-7b743",
    storageBucket: "ig-clone-7b743.appspot.com",
    messagingSenderId: "27214081379",
    appId: "1:27214081379:web:87259ba4f594011162f756",
    measurementId: "G-170QJXZDPE"
  };

// use your app config here

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;