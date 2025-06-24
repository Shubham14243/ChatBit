import React, { Suspense, useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({name, email, password, confirmpassword, gender}) => {
        const success = handleInputErrors({name, email, password, confirmpassword, gender});
        if (!success){
            return;
        }

        setLoading(true);
        try{

            const res = await fetch('https://chatbit.onrender.com/api/auth/signup', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name, email, password, confirmpassword, gender}),
                credentials: 'include'
            })

            const data = await res.json();

            if(data.type === "error" || data.type === "failure") {
                throw new Error(data.message);
            }

            localStorage.setItem("chatUser", JSON.stringify(data.data));

            setAuthUser(data.data);

        } catch(error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }

    };

    
    return {loading, signup}

};

export default useSignup


function handleInputErrors({name, email, password, confirmpassword, gender}) {
    if (!name || !email || !password || !confirmpassword || !gender){
        toast.error("Please fill all the fields!");
        return false;
    }

    if (name.length < 3){
        toast.error("Please enter a valid name!");
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

    if (password !== confirmpassword){
        toast.error("Password and Confirm password not matched!");
        return false;
    }

    return true;

}