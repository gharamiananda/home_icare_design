import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAddYNSjHVZBDQAck33WGO0SD0rO81hCh0",
    authDomain: "icare-76ec2.firebaseapp.com",
    projectId: "icare-76ec2",
    storageBucket: "icare-76ec2.appspot.com",
    messagingSenderId: "733035766342",
    appId: "1:733035766342:web:a731548fbf10d8bf3ca047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;