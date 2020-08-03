import firebase from 'firebase';
import admin from 'firebase-admin';




const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shitadelivery.firebaseio.com"
});


const firebaseConfig = {
  apiKey: 'AIzaSyAszh383qHw1bVaDb51OkwYDl44Zp8D1aI',
  authDomain: 'shitadelivery.firebaseapp.com',
  databaseURL: 'https://shitadelivery.firebaseio.com',
  projectId: 'shitadelivery',
  storageBucket: 'shitadelivery.appspot.com',
  messagingSenderId: '643179226352',
  appId: '1:643179226352:web:79a0444e9b93d387a7ce35',
  measurementId: 'G-HHWQ1SD42C'
};
firebase.initializeApp(firebaseConfig);



export = {
  FIRESTORE: firebase.firestore(),
  DATABASE: firebase.database(),
  AUTH: firebase.auth(),
  admin
}