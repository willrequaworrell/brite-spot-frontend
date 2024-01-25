import { Navigate, Outlet } from "react-router-dom"
import Cookies from "js-cookie"

import { useAuth } from "../Context/AuthContext"
import { useEffect, useState } from "react"

const ProtectedRoute = () => {
    const {currentUser, login} = useAuth()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const tokenCookie = Cookies.get('jwt');
        console.log("token: ", tokenCookie)
        console.log("curr user: ", currentUser)
    
        if (tokenCookie && !currentUser) {
            console.log("testing!")
            login(tokenCookie);
        }
        setLoading(false)
    }, [currentUser, login])
    if (loading){
        return null
    }


    return(
        currentUser ? <Outlet/> : <Navigate to="/auth"/>
    )
}

export default ProtectedRoute