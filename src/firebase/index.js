import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = require('./firebase.json')
const app = initializeApp(firebaseConfig)

// Initializing the Cloud
const db = getFirestore(app);

async function pushData(data){
    await setDoc(doc(db, 'profiles', data.user.uid), data)
    return true
} // 1S

export default pushData