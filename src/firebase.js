import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCTwDlGNlIInbl0NAx-wd5J0HYPd1s_7fI",
    authDomain: "todo-app-cp-f9af9.firebaseapp.com",
    databaseURL: "https://todo-app-cp-f9af9.firebaseio.com",
    projectId: "todo-app-cp-f9af9",
    storageBucket: "todo-app-cp-f9af9.appspot.com",
    messagingSenderId: "314755111077",
    appId: "1:314755111077:web:f80a8e60f025ace528d54c",
    measurementId: "G-1ZTJ6CR4BP"

});

const db = firebaseApp.firestore();
export default db;