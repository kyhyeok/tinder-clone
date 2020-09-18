import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADQOtJ-YpSsgUR_nwV5HjIvcSJYfoCaFo",
  authDomain: "tinder-clone-236ce.firebaseapp.com",
  databaseURL: "https://tinder-clone-236ce.firebaseio.com",
  projectId: "tinder-clone-236ce",
  storageBucket: "tinder-clone-236ce.appspot.com",
  messagingSenderId: "730377788520",
  appId: "1:730377788520:web:0a54cdd6614968f913afdd",
  measurementId: "G-6RR7PKGSVV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
