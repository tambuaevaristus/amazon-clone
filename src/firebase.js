import { initializeApp } from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmw_pLsalaZeMc7OGWtWLvAf1oMyrnleU",
    authDomain: "challenge-67160.firebaseapp.com",
    projectId: "challenge-67160",
    storageBucket: "challenge-67160.appspot.com",
    messagingSenderId: "56756288733",
    appId: "1:56756288733:web:c2cc1a1522406aae99ef34",
    measurementId: "G-DQPC92GHYP"
  };

  const app = initializeApp(firebaseConfig);
  
  // const db = firebaseApp.firestore();
  // const auth = getAuth(firebaseApp);
  
  export default app;