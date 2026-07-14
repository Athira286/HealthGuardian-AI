import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const checkIn = async (user) => {
  await addDoc(collection(db, "attendance"), {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    checkInTime: serverTimestamp(),
  });
};