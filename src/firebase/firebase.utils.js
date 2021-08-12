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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }

    return userRef;
}

  export default firebase;