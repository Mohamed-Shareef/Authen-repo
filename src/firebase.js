import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCrytXVTp4-acECSFgxdROBwaVK8mxhMQc",
    authDomain: "newauthen-21b23.firebaseapp.com",
    projectId: "newauthen-21b23",
    storageBucket: "newauthen-21b23.appspot.com",
    messagingSenderId: "416894277151",
    appId: "1:416894277151:web:72bf344f974b2d1483272a",
    measurementId: "G-G2JCRVKTT2"
  };

  const app=firebase.initializeApp(firebaseConfig)

 export const auth=app.auth()

 export default app;