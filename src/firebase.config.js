// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBA-kYare8vJVF_EgKFgSF5-AXttZFyzPs',
  authDomain: 'house-marketplace-app-c348b.firebaseapp.com',
  projectId: 'house-marketplace-app-c348b',
  storageBucket: 'house-marketplace-app-c348b.appspot.com',
  messagingSenderId: '366266758186',
  appId: '1:366266758186:web:c4cfa3a7d363f605293f53',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
