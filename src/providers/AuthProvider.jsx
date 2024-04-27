import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //firebase kono akta mathod k call korbo. call korta gelea amak password authentication kotea hobea
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //sign In 

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    //sign Out or logOut
     
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Current User', currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])


    const AuthInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,

    };



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;