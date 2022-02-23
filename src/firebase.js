
import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyBCZtBWwKPLsPoX375Ktl2zCxFt4NFZL-I",
    authDomain: "fir-899e9.firebaseapp.com",
    databaseURL: "https://fir-899e9-default-rtdb.firebaseio.com",
    projectId: "fir-899e9",
    storageBucket: "fir-899e9.appspot.com",
    messagingSenderId: "264671338177",
    appId: "1:264671338177:web:1bee723936de720bde7e40",
    measurementId: "G-153SPGDVJJ"
  };

  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
  