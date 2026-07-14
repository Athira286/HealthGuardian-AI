import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebaseConfig";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {

  try {

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    const userRef = doc(db, "users", user.uid);

    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {

      await setDoc(userRef, {

        uid: user.uid,

        name: user.displayName,

        email: user.email,

        photo: user.photoURL,

        role: "worker",

        createdAt: new Date()

      });

    }

    return user;

  }

  catch (error) {

    console.error(error);

  }

};