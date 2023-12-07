import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { update, set, getDatabase, ref as refText, push, onValue, orderByChild, query, equalTo, limitToLast, orderByKey } from "firebase/database";
import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAbnFbA7pNlCfKx4RF295wSdjHLWNxcULM",
    authDomain: "lqt-service.firebaseapp.com",
    projectId: "lqt-service",
    storageBucket: "lqt-service.appspot.com",
    messagingSenderId: "220971455089",
    appId: "1:220971455089:web:69dcb30edf3b69e50141d0",
    measurementId: "G-2KFPR1HMBL"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
export { update, set, orderByKey, limitToLast, database, refText, push, onValue, orderByChild, query, equalTo, storage, refImage, uploadBytes, getDownloadURL };