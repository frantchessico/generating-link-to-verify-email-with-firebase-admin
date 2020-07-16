import firebase from 'firebase';

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
firebase.initializeApp(firebaseConfig)

//Como e um ficheiro TS nao precisa o Mudule an exportacao

export = {
  FIRESTORE: firebase.firestore(),
  DATABASE: firebase.database(),
  AUTH: firebase.auth()
}