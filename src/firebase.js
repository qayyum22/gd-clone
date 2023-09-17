
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDdQL_p8LZijENDoD99qSoybKbl9P6eIbQ",
    authDomain: "drive-clone-bbd43.firebaseapp.com",
    projectId: "drive-clone-bbd43",
    storageBucket: "drive-clone-bbd43.appspot.com",
    messagingSenderId: "452312531217",
    appId: "1:452312531217:web:e9267764f5cf25bd7e0cb0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, db, storage, provider }