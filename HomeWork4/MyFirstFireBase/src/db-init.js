import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAz48jcsID-F7VaSe_jPvUPIQYuUd0QvT0",
  authDomain: "budget-fdf8d.firebaseapp.com",
  databaseURL: "https://budget-fdf8d.firebaseio.com",
  projectId: "budget-fdf8d",
  storageBucket: "budget-fdf8d.appspot.com",
  messagingSenderId: "743519904491",
  appId: "1:743519904491:web:a829e54a29cbbbc61814ae",
  measurementId: "G-XX925WQMM7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const AppDB = firebase.database();
export { AppDB }; // Make this name available to other modules
