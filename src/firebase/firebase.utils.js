import firebase from "firebase/app";
import 'firebase/firestore'; // for the database
import 'firebase/auth'; // for the auth

const config = {
    apiKey: "AIzaSyCC8tobcEy-vYIuM5ozhXCmksuhZhp16AI",
    authDomain: "crown-db-e56ca.firebaseapp.com",
    projectId: "crown-db-e56ca",
    storageBucket: "crown-db-e56ca.appspot.com",
    messagingSenderId: "686765516104",
    appId: "1:686765516104:web:3ab661858820978c073f7d"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;