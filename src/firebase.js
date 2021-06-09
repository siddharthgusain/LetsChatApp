import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD29bo42wfS1RgjsiaqIKi7WOZgc62u6BI",
    authDomain: "letschatapp-f6ac9.firebaseapp.com",
    projectId: "letschatapp-f6ac9",
    storageBucket: "letschatapp-f6ac9.appspot.com",
    messagingSenderId: "240144597878",
    appId: "1:240144597878:web:d9a5a1d164770394daf057"
  }).auth();