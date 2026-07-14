import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const checkIn = async (user) => {

  const today = new Date().toISOString().split("T")[0];

  const attendanceRef = collection(db, "attendance");

  const q = query(
    attendanceRef,
    where("uid", "==", user.uid),
    where("date", "==", today)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    alert("You have already checked in today.");
    return;
  }

  await addDoc(attendanceRef, {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    date: today,
    checkInTime: serverTimestamp(),
  });

  alert("Check-in successful!");
};