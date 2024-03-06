import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase";

export const Context = createContext()

export function AuthContext({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribeAuth
        unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            if(currentUser){
                setUser(currentUser)
            } else {
                setUser(null)
            }    
        })

        return () => {
            if (unsubscribeAuth) unsubscribeAuth()
        }
    }, [])
    const values = {
        user: user,
        setUser: setUser
    }

    return <Context.Provider value={values}>
        {!loading && children}
    </Context.Provider>
}