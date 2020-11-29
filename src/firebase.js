import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCOEqRK0q_9dDkRs32RqniKyUAIQRjxaS4",
    authDomain: "messenger-clone-d89c7.firebaseapp.com",
    databaseURL: "https://messenger-clone-d89c7.firebaseio.com",
    projectId: "messenger-clone-d89c7",
    storageBucket: "messenger-clone-d89c7.appspot.com",
    messagingSenderId: "162366897772",
    appId: "1:162366897772:web:7d9eb93c33663bb6d86249"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db ;