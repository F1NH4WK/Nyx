import { initializeApp } from 'firebase/app';
import { 
    getFirestore, setDoc, doc, getDoc, 
    collection, getDocs, query } from "firebase/firestore";

const firebaseConfig = require('./firebase.json')
const app = initializeApp(firebaseConfig)

// Initializing the Cloud
const db = getFirestore(app);

export async function getAPIKey(){
    const docRef = doc(db, 'API', 'apikey')
    const key = await getDoc(docRef)
    return key.data().key
}

export async function pushData(data){
    await setDoc(doc(db, 'profiles', data.nick), data)
    return true
} // 1S

export async function pushDataToEmail(data, email){
    const docRef = doc(db,'emails', email)
    console.log(data, email)
    await setDoc(docRef, data)
    return true
}

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
    await setDoc(doc(db, 'emails', email), { email: email })
    return true
}

export async function getSummonerInfos(summoner){
    const docRef = doc(db, 'profiles', summoner)
    const docSnap = await getDoc(docRef)
    return docSnap
}

export async function getSummoner(){
    const q = query(collection(db, 'profiles'))
    const profiles = []
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
        profiles.push(doc.data())
    })

    // recomendo dar um slice aqui, vai ajudar dps
    return profiles
}

export async function getDataByEmail(email){
    const docRef = doc(db, 'emails', email);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}