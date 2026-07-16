import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebaseConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [guest, setGuest] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      if (!currentUser) {

        if (!guest) {
          setUser(null);
          setRole(null);
        }

        setLoading(false);
        return;
      }

      setUser(currentUser);

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setRole(userSnap.data().role);
      }

      setLoading(false);

    });

    return unsubscribe;

  }, [guest]);

  const loginAsGuest = () => {
    setGuest(true);
    setRole("officer");
  };

  const logout = async () => {

    if (guest) {
      setGuest(false);
      setRole(null);
      return;
    }

    await signOut(auth);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        role,
        guest,
        loginAsGuest,
        logout,
      }}
    >

      {!loading && children}

    </AuthContext.Provider>

  );

}

export function useAuth() {
  return useContext(AuthContext);
}