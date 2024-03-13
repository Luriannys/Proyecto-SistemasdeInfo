import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJLc1RF6xmVDZBTDSN2S0G6QNeUkZinW8",
    authDomain: "agrupamet.firebaseapp.com",
    projectId: "agrupamet",
    storageBucket: "agrupamet.appspot.com",
    messagingSenderId: "271688799359",
    appId: "1:271688799359:web:3a84c32527ea309dd65b4a"
};


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
// export const storage = firebase.storage();