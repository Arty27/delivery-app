import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuNn-jnTz3RMbWNQFS3yiPBB7r1G3wlm0",
  authDomain: "delivery-app-4a149.firebaseapp.com",
  databaseURL: "https://delivery-app-4a149-default-rtdb.firebaseio.com",
  projectId: "delivery-app-4a149",
  storageBucket: "delivery-app-4a149.appspot.com",
  messagingSenderId: "544677153980",
  appId: "1:544677153980:web:adcec6ae54509d848a94b9",
  measurementId: "G-EJFV23NW3Q",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
