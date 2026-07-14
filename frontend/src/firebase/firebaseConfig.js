import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0Hq1e9ELPqx10fOYtL91SsVqG0vmiUQs",
  authDomain: "healthguardian-ai-e9797.firebaseapp.com",
  projectId: "healthguardian-ai-e9797",
  storageBucket: "healthguardian-ai-e9797.firebasestorage.app",
  messagingSenderId: "929097136300",
  appId: "1:929097136300:web:ca1c810ce491f8e88c8709",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);