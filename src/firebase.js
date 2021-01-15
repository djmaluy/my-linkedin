import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWX8Kg04iEn50JHMNrY1WC61IaMBrnCew",
  authDomain: "my-linkedin-3203f.firebaseapp.com",
  projectId: "my-linkedin-3203f",
  storageBucket: "my-linkedin-3203f.appspot.com",
  messagingSenderId: "367988022887",
  appId: "1:367988022887:web:149c3009ab1311b7f63ec2",
  measurementId: "G-4WYF60SGER",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
