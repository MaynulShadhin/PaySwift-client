import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure()
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            axiosSecure.get('/verifyToken',{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(res=>{
                setUser(res.data.user);
            }).catch(err=>{
                console.error('Token verification failed',err);
            })
            setLoading(false);
        }
    },[]);

    const login = (token,userData)=>{
        localStorage.setItem('token',token);
        setUser(userData);
    };

    const logout=()=>{
        localStorage.removeItem('token');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,loading,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;