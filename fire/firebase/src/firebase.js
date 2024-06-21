import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseApp = firebase.initializeApp(
    {
  apiKey: "AIzaSyC1tv5QOMTTdONp8kuyx8XvuEyta8vWcHE",
  authDomain: "sharma-55454.firebaseapp.com",
  projectId: "sharma-55454",
  storageBucket: "sharma-55454.appspot.com",
  messagingSenderId: "169746671567",
  appId: "1:169746671567:web:d15dc784c0280bbaa114ba",
  measurementId: "G-TDV3DHFB7E"
}
) ;



var db = firebaseApp.firestore();
export {db};