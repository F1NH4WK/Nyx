import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

const firebaseConfig = require('./firebase.json')
const app = initializeApp(firebaseConfig)

// Initializing the Cloud
const db = getFirestore(app);

export async function pushData(data){
    await setDoc(doc(db, 'profiles', data.nick), data)
    return true
} // 1S

export async function getData(nick){
    const docRef = doc(db, 'profiles', nick)
    const docSnap = await getDoc(docRef)
    return docSnap.exists();
}

export async function isEmailAuthenticated(email){
    const docRef = doc(db, 'emails', email)
    const docSnap = await getDoc(docRef)
    return docSnap.exists();
}

export async function addNewUser(email){
    await setDoc(doc(db, 'emails', email), {email: email})
    return true
}