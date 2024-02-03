import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext();
const firebaseConfig = {
  apiKey: "AIzaSyCebuiPGKOgJcI0gHCNiOZcejCmIGzo4Cw",
  authDomain: "user-profile-app-d0818.firebaseapp.com",
  projectId: "user-profile-app-d0818",
  storageBucket: "user-profile-app-d0818.appspot.com",
  messagingSenderId: "875366820514",
  appId: "1:875366820514:web:90cd9255d3f75690bc05fb",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState();

  const isLoggedIn=user?true:false
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
console.log(isLoggedIn)
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const loginUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, loginUserWithEmailAndPassword,isLoggedIn }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
const useFirebase = () => useContext(FirebaseContext);
export { useFirebase, FirebaseProvider };
