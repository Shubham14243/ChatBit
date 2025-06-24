import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const{setAuthUser} = useAuthContext();

    const login = async (email, password) => {
        setLoading(true);
        try {

            const success = dataValidate(email,password);

            if(!success){
                return;
            }

            const res = await fetch("https://chatbit.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
                credentials: 'include'
            })

            const data = await res.json();

            if(data.type === "failure" || data.type === "error") {
                throw new Error(data.message);
            }

            localStorage.setItem("chatUser", JSON.stringify(data.data));
            setAuthUser(data.data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, login};

}

export default useLogin

function dataValidate(email, password){
    if(!email || !password){
        toast.error("Please enter Email and Password!");
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        toast.error("Please enter a valid email!");
        return false;
    }

    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{6,15}$/)){
        toast.error("Please enter a valid 6-15 characters alphanumeric password!");
        return false;
    }

    return true;
}