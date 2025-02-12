import { createContext, useEffect, useState } from "react";
import app from "../Utils/firebase.init.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Setting a Password Reset Function
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  // Getting the current user
  const profileUser = auth.currentUser;

  // Creating user with email and password
  const createUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update Profile function here
  const updateCreatedUser = (updatedProfile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedProfile);
  };

  // Creating user with GMAIL
  const loginUserGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login Profile Function here
  const loginUserEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signout Profile Function here
  const logOut = () => {
    signOut(auth);
  }

  // Setting Up Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Object for transferring contexts
  const authInfo = {
    loading,
    setLoading,
    createUserEmail,
    setUser,
    user,
    updateCreatedUser,
    loginUserEmail,
    loginUserGmail,
    logOut,
    profileUser,
    passwordReset,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
