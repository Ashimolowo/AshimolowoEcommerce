



// Import specific functions from the Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import SignIn from './../components/sign-in/sign-in';

// Your Firebase configuration object
const config = {
    apiKey: "AIzaSyBupheooX5q70M1CY19a8GehqGnLfoeMYE",
    authDomain: "ashimolowoecommerce.firebaseapp.com",
    projectId: "ashimolowoecommerce",
    storageBucket: "ashimolowoecommerce.appspot.com",
    messagingSenderId: "734987941058",
    appId: "1:734987941058:web:508711b128cdc4954ab75b",
    measurementId: "G-PEN35S2E5M"
};

//creating users profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =  doc(firestore, `users/${userAuth.uid}`);;

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        // If the document does not exist, create it
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                displayName: userAuth.displayName,
                email: userAuth.email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('Error creating user document', error.message);
        }
    }

    return userRef
    
}

// Initialize Firebase with the config object
const app = initializeApp(config);

// Initialize Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Set up Google authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Function to sign in with Google
export const SignInWithGoogle = () => signInWithPopup(auth, provider);

// Export the Firebase app instance if needed
export default app;
