import { initializeApp } from "firebase/app";

 const firebaseConfig = {
    apiKey: "AIzaSyAFKbeHWSpLHAWq6OB3XvOwyGnABs-Wipw",
    authDomain: "linkedin-c5655.firebaseapp.com",
    projectId: "linkedin-c5655",
    storageBucket: "linkedin-c5655.appspot.com",
    messagingSenderId: "672041837221",
    appId: "1:672041837221:web:c69dd1de370550988a234c",
    measurementId: "G-33Z06WXBS1"
  };
 

  const fb =firebase.initializeApp(firebaseConfig)
  const database = fb.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default database;
  
  