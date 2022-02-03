import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxJRkJVOKLm480KUsiayIJZKFgXnKi6u8",
    authDomain: "chatapp-310c4.firebaseapp.com",
    projectId: "chatapp-310c4",
    storageBucket: "chatapp-310c4.appspot.com",
    messagingSenderId: "604751513076",
    appId: "1:604751513076:web:5c70f80f89576eceef65a1",
    measurementId: "G-E17DLVNG62"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth =firebase.auth();
  let storage =firebase.storage();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  db.enablePersistence().catch((error) => {
    console.log(`Firebase persistence error ${error.code}`)
  });

// database setup
  export {db,auth,storage,timestamp};