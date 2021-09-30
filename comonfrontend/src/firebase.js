import firebase from './firebase';
import FirebaseApp  from '@firebase/app';
import 'firebase/auth';
import 'firebase/auth'
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAFtAK3S8rMqpV0rXTg-8aDkp1zP6_00k",
    authDomain: "comon-329f6.firebaseapp.com",
    projectId: "comon-329f6",
    storageBucket: "comon-329f6.appspot.com",
    messagingSenderId: "170120571832",
    appId: "1:170120571832:web:49e9503209ed5fdd643d4d",
    measurementId: "G-PM59N0T6CC"
  };

const firebaseApp = firebase.initialiseApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db


