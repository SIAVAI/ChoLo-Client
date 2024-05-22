/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Auth/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user);
        setUser(user);
        setLoader(false);
      }
    });
  }, []);

  const regUser = (email, pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //   Google
  const providerGoogle = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, providerGoogle);
  };

  //   Github
  const providerGithub = new GithubAuthProvider();
  const githubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, providerGithub);
  };

  const allValues = {
    user,
    setUser,
    loader,
    regUser,
    loginUser,
    googleSignIn,
    githubSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
