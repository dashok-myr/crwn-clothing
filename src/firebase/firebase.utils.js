import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQL2QhDt2vpE2NRPmVWYi20_txzLD5PHM",
    authDomain: "crwn-db-4d4c2.firebaseapp.com",
    databaseURL: "https://crwn-db-4d4c2.firebaseio.com",
    projectId: "crwn-db-4d4c2",
    storageBucket: "crwn-db-4d4c2.appspot.com",
    messagingSenderId: "802804025311",
    appId: "1:802804025311:web:cc75f6bd94a0eb9c14666a",
    measurementId: "G-JT5EYVVF11"
  };

  export const getOrCreateUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    const {exists} = snapShot;

    if(exists) return userRef;

    const { displayName, email } = userAuth;
    const createdAt = new Date();
 
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (error) {
      console.log('error creating user', error.message)
    }

    return userRef;
  }

   

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
