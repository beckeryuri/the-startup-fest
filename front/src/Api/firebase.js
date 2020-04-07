import * as firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyBpU42VmNA9uLFL6tFz93SJoh7QV0-05E4",
    authDomain: "startup-ranking.firebaseapp.com",
    databaseURL: "https://startup-ranking.firebaseio.com",
    projectId: "startup-ranking",
    storageBucket: "startup-ranking.appspot.com",
    messagingSenderId: "661066665472",
    appId: "1:661066665472:web:c4a2fb0e571add31e712e5",
    measurementId: "G-NBQPBV47ZP"
  }

  firebase.initializeApp(config)
  export default firebase