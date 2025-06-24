import React, { useState } from 'react'
import toast from 'react-hot-toast';

const usePassword = () => {

    const [loading, setLoading] = useState(false);

    const updatepassword = async ({currentPassword, newPassword, confirmPassword}) => {
        setLoading(true);
        try{

            const success = validatePassword({currentPassword, newPassword, confirmPassword});

            if(!success){
                return;
            }

            const res = await fetch("https://chatbit.onrender.com/api/user/password/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword,
                    confirmPassword
                }),
                credentials: 'include'
            })

            const data = await res.json();

            if(data.type === "error" || data.type === "failure"){
                throw new Error(data.message);
            }

            toast.success("Password Updated Successfully!");
            
        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading, updatepassword};

}

export default usePassword

function validatePassword({currentPassword, newPassword, confirmPassword}){
    
    if (!currentPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{6,15}$/)){
        toast.error("Please enter a valid 6-15 characters alphanumeric Current Password!");
        return false;
    }

    if (!newPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{6,15}$/)){
        toast.error("Please enter a valid 6-15 characters alphanumeric New Password!");
        return false;
    }

    if (newPassword !== confirmPassword){
        toast.error("New Password and Confirm Password not Matched!");
        return false;
    }

    return true;
     
}