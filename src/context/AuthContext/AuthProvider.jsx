import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";


//akta google provider banalam start>
const googleProvider = new GoogleAuthProvider()
//akta google provider banalam end>

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up new users from auth doc start

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign up new users from auth doc  end

  //for signin/login section start>
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //for signin/login section end>

  //sign in with google provider start>
 const signInWithGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)
 }
  //sign in with google provider end>

  //for singOut section is start >
 const signOutUser=() =>{
  setLoading(true);
  return signOut(auth);
 }
  //for singOut section is start >

  //make observer start>
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //make observer end

  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
