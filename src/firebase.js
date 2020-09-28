import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARAaGGm4ut8OPWoh_8RLCVMxL8o1dY1Ug",
  authDomain: "whatsapp-firebase-31cc5.firebaseapp.com",
  databaseURL: "https://whatsapp-firebase-31cc5.firebaseio.com",
  projectId: "whatsapp-firebase-31cc5",
  storageBucket: "whatsapp-firebase-31cc5.appspot.com",
  messagingSenderId: "1045561176058",
  appId: "1:1045561176058:web:23d303de48327b76b23e43",
  measurementId: "G-Y3HYQW7X3F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
