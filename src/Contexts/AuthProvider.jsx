import { createContext, useEffect, useState } from "react";
import app from "../Utils/firebase.init.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Creating user with email and password
    const createUserEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Profile function here
    const updateCreatedUser = (updatedProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedProfile)
    }

    // Setting Up Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // Object for transferring contexts
    const authInfo = {
        loading,
        createUserEmail,
        setUser,
        user,
        updateCreatedUser,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;