import firebase, { initializeApp } from "firebase"
import "firebase/auth"
import "firebase/firestore"

export const config = {
    apiKey: "AIzaSyC0dE7AAU7Z1400H2G8ATqPEDMdYr27D_k",
    authDomain: "appycart-ab895.firebaseapp.com",
    databaseURL: "https://appycart-ab895.firebaseio.com",
    projectId: "appycart-ab895",
    storageBucket: "",
    messagingSenderId: "189549598564",
    appId: "1:189549598564:web:aa38e83a24b0da48"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase