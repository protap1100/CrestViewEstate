import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../FirebaseConfig/FirebaseConfig";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =  (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider;
        setLoading(true)
        const auth = getAuth(app);
        signInWithPopup(auth, provider);
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
             console.log('user is in state change',currentUser);
             setUser(currentUser);
             setLoading(false);
         } );
         return () =>{
             unSubscribe();
         }
     },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;