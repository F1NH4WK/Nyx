import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    "apiKey": "AIzaSyDJ7tuyoV5qN0ZCpVgLwMUv20-OZ8YYm-E",
    "authDomain": "nyxapp-e21b1.firebaseapp.com",
    "projectId": "nyxapp-e21b1",
    "storageBucket": "nyxapp-e21b1.appspot.com",
    "messagingSenderId": "443331962612",
    "appId": "1:443331962612:web:b072ecf478798ce7e0e0a1",
    "measurementId": "G-9V0KMCE8SB"
}


const app = initializeApp(firebaseConfig)

// Initializing the Cloud
const db = getFirestore(app);

async function pushData(data){
    await setDoc(doc(db, 'profiles', data.nick), data)
    return true
} // 2S

export default pushData