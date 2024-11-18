import { createContext, useState } from "react";
import app from "../Utils/firebase.init.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
    const authInfo = {
        createUserEmail,
        setUser,
        user,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;