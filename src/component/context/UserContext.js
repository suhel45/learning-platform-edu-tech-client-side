import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/Firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(false);


    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {user,createUser,signIn,googleSignIn,loading}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;