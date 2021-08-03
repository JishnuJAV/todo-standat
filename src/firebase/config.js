import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBVPNvxhM7SxmY_TH6J5V5J8P38eBZ04bU",
    authDomain: "fir-cloud-notification-ed8a7.firebaseapp.com",
    databaseURL: "https://fir-cloud-notification-ed8a7-default-rtdb.firebaseio.com",
    projectId: "fir-cloud-notification-ed8a7",
    storageBucket: "fir-cloud-notification-ed8a7.appspot.com",
    messagingSenderId: "113157422836",
    appId: "1:113157422836:web:f77ebee014e6ed670228a1"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig);