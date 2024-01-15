import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqW71owuWozMDCsbeONOITWQi_bHHwXo0",
  authDomain: "crwn-clothing-db-80291.firebaseapp.com",
  projectId: "crwn-clothing-db-80291",
  storageBucket: "crwn-clothing-db-80291.appspot.com",
  messagingSenderId: "82973229140",
  appId: "1:82973229140:web:c055eccfb870b697772dc1",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    console.log(auth);

    const createdAt = new Date();

    console.log(createdAt);

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return userDocRef;
};
