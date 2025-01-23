// Firebase configuracion
const firebaseConfig = {
    apiKey: "AIzaSyC_cb5v6VvL4HKluInhRL36qRE-UEk9ujA",
    authDomain: "proyectopizzeriauam.firebaseapp.com",
    projectId: "proyectopizzeriauam",
    storageBucket: "proyectopizzeriauam.firebaseapp.com",
    messagingSenderId: "514186981759",
    appId: "1:514186981759:web:5cc4d43ef32b854ebdea4a",
    measurementId: "G-HNVFKLWQBN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();