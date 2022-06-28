import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCPKodRCuLaBCCBy0dvIPZb1hpOLh-7tn8",
    authDomain: "chat-app-48e63.firebaseapp.com",
    projectId: "chat-app-48e63",
    storageBucket: "chat-app-48e63.appspot.com",
    messagingSenderId: "512360298393",
    appId: "1:512360298393:web:23d2d2babcd072a0d68508"
  };

firebase.initializeApp(firebaseConfig)
export default firebase;